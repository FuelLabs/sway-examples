import { useInitializeAirdrop } from '@/hooks/useInitializeAirdrop';
import { copyToClipboard, getTruncatedAddress } from '@/lib/utils';
import { checkEligibility } from '@/utils/airdropEligibility';
import { useWallet } from '@fuels/react';
import { IconCopy } from '@tabler/icons-react';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { DateTime } from 'fuels';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { formatUnits } from 'viem';
import { Text } from '../../../components/Text';
import { Button as ShadcnButton } from '../../../components/ui/button';
import { useClaimAirdrop } from '../../../hooks/useClaimAirdrop';
import {
  useGetEndTime,
  useGetIsInitialized,
  useGetIsPaused,
  useGetMerkleRoot,
  useGetNumLeaves,
  useGetOwner,
} from '../../../hooks/useGetAirdropContractData';
import {
  createMerkleTree,
  generateProof,
  Recipient,
} from '../../../utils/merkleTrees';

export const Route = createFileRoute('/airdrop/claim/$slug')({
  component: () => <ClaimAirdrop />,
  validateSearch: (search: Record<string, unknown>) => ({
    recipient: search.recipient as RecipientData,
  }),
})

export type RecipientData = Array<Recipient>

function ClaimAirdrop() {
  const { slug } = useParams({ strict: false })
  const { recipient } = Route.useSearch()
  const contractId = slug as string
  const recipients = recipient as RecipientData

  const {
    mutate: claim,
    error: claimError,
    status: claimStatus,
    isPending: claimIsPending,
    isSuccess: claimIsSuccess,
    isError: claimIsError,
  } = useClaimAirdrop()
  const [possibleRecipient, setPossibleRecipient] = useState<Recipient>()
  const [treeIndex, setTreeIndex] = useState<number>()
  const { wallet } = useWallet()

  const { data: owner, isFetching: ownerIsfetching, refetch: refetchOwner } = useGetOwner({
    contractId,
  })
  const { data: endTime, isFetching: endTimeIsFetching } = useGetEndTime({
    contractId,
  })
  const { data: isPaused, isFetching: isPausedFetching } = useGetIsPaused({
    contractId,
  })
  const { data: merkleRoot, isFetching: merkleRootIsFetching } =
    useGetMerkleRoot({ contractId })
  const { data: numLeaves, isFetching: numLeavesIsFetching } = useGetNumLeaves({
    contractId,
  })
  const {
    mutate: initialize,
    data: initializeData,
    status: initializeStatus,
    isSuccess: initializeSuccess,
    error: initializeError,
    isPending: initializeIsPending,
  } = useInitializeAirdrop()

  const {
    data: isInitialized,
    isFetching: fetchingIsInitialized,
    refetch: refetchIsIntialized,
  } = useGetIsInitialized({ contractId })

  useEffect(() => {
    if (recipients && wallet) {
      const fallback = (recipient: RecipientData[number], index: number) => {
        setPossibleRecipient(recipient)
        setTreeIndex(index)
      }
      checkEligibility(recipients, wallet, fallback)
    }
  }, [wallet, recipients])

  useEffect(() => {
    if (
      initializeStatus === 'success' &&
      initializeData?.transactionId &&
      initializeSuccess
    ) {
      refetchIsIntialized()
      refetchOwner()
    }
  }, [
    initializeStatus,
    initializeData,
    initializeIsPending,
    refetchIsIntialized,
    initializeSuccess,
    refetchOwner,
  ])

  const claimHandler = async () => {
    if (!wallet) {
      toast.error('Wallet not connected!')
      return
    }

    if (isInitialized?.toString() === 'false') {
      toast.error('Owner needs to initialize the contract first!')
      return
    }

    if (!possibleRecipient) {
      toast.error('You are not eligible for the airdrop')
      return
    }

    const { tree, root, leaves } = createMerkleTree(recipients as RecipientData)

    const proof = generateProof(tree, treeIndex as number)
  
    claim({
      contractId,
      amount: possibleRecipient?.amount as unknown as number,
      account: wallet?.address.toB256() as unknown as string,
      treeIndex: treeIndex as number,
      proof,
      recipient: {
        Address: { bits: wallet?.address.toB256() },
      },
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <Text variant="h4" className="text-3xl font-bold text-white mb-4">
          Claim Airdrop
        </Text>
        <div className="flex justify-center items-center gap-2 bg-gray-800/50 py-2 px-4 rounded-lg inline-flex mx-auto">
          <Text variant="h5" className="text-gray-300 text-sm">
            Contract ID: {getTruncatedAddress(contractId)}
          </Text>
          <IconCopy
            className="text-gray-400 cursor-pointer h-4 hover:text-gray-200 transition-colors"
            onClick={() => copyToClipboard(contractId)}
          />
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-gray-900/50 rounded-xl p-8 shadow-lg border border-gray-800">
        {/* Initialization Status */}
        <div className="mb-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${
                fetchingIsInitialized 
                  ? 'bg-yellow-500 animate-pulse' 
                  : isInitialized?.toString() === 'true'
                    ? 'bg-green-500'
                    : 'bg-red-500'
              }`} />
              <Text className="text-gray-300 text-lg">
                {fetchingIsInitialized
                  ? 'Checking initialization status...'
                  : isInitialized?.toString() === 'true'
                    ? 'Contract Initialized'
                    : 'Contract Not Initialized'}
              </Text>
            </div>

            {!fetchingIsInitialized && 
             isInitialized?.toString() === 'false' && 
             !!wallet && (
              <ShadcnButton
                disabled={initializeIsPending || !wallet}
                className="w-64 bg-green-600 hover:bg-green-700 transition-colors"
                onClick={() => initialize({ contractId })}
              >
                {initializeIsPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Initializing...
                  </>
                ) : (
                  'Initialize Airdrop'
                )}
              </ShadcnButton>
            )}
          </div>
        </div>

        {/* Claim Section */}
        <div className="space-y-6">
          {!wallet ? (
            <div className="text-center py-8 bg-gray-800/50 rounded-lg">
              <Text variant="h5" className="text-gray-400 px-2">
                Please connect your wallet to check eligibility
              </Text>
            </div>
          ) : !possibleRecipient ? (
            <div className="text-center py-8 bg-red-900/20 rounded-lg border border-red-900">
              <Text variant="h5" className="text-red-400">
                You are not eligible for this airdrop
              </Text>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-900">
                <Text className="text-green-400 text-center">
                  Your Allocation: {Number(formatUnits(possibleRecipient.amount, 9))}
                </Text>
              </div>
              <ShadcnButton
                onClick={claimHandler}
                disabled={claimIsPending || !wallet || !possibleRecipient}
                className="w-full bg-green-600 hover:bg-green-700 transition-opacity"
              >
                {claimIsPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Claiming...
                  </>
                ) : (
                  'Claim Airdrop'
                )}
              </ShadcnButton>
            </div>
          )}
        </div>

        {/* Contract Details */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Text className="text-gray-400 text-center text-xl mb-6">Contract Details</Text>
          <div className="space-y-4 mt-6">
            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center justify-between">
                <Text className="text-gray-400 font-medium">Owner</Text>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">
                    {ownerIsfetching
                      ? 'Fetching...'
                      : getTruncatedAddress(owner?.Address?.bits ?? '')}
                  </span>
                  <IconCopy
                    className="text-gray-400 cursor-pointer h-4 hover:text-gray-200"
                    onClick={() => copyToClipboard(owner?.Address?.bits as string)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center justify-between">
                <Text className="text-gray-400 font-medium">End Time</Text>
                <span className="text-gray-300">
                  {endTimeIsFetching
                    ? 'Fetching...'
                    : DateTime.fromTai64(endTime?.toString() ?? '').toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center justify-between">
                <Text className="text-gray-400 font-medium">Status</Text>
                <span className={`px-3 py-1.5 rounded-full text-sm ${
                  isPaused ? 'bg-red-900/50 text-red-400' : 'bg-green-900/50 text-green-400'
                }`}>
                  {isPausedFetching ? 'Fetching...' : isPaused ? 'Paused' : 'Active'}
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center justify-between">
                <Text className="text-gray-400 font-medium">Merkle Root</Text>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">
                    {merkleRootIsFetching ? 'Fetching...' : getTruncatedAddress(merkleRoot?.toString() ?? '')}
                  </span>
                  <IconCopy
                    className="text-gray-400 cursor-pointer h-4 hover:text-gray-200"
                    onClick={() => copyToClipboard(merkleRoot?.toString() as string)}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center justify-between">
                <Text className="text-gray-400 font-medium">Number of Leaves</Text>
                <span className="text-gray-300">
                  {numLeavesIsFetching ? 'Fetching...' : numLeaves?.toString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
