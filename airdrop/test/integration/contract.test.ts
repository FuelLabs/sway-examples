import { launchTestNode } from 'fuels/test-utils';

import { describe, test, expect } from 'vitest';
import { TestContractFactory } from '../../src/sway-api';

/**
 * Imports for the contract factory and bytecode, so that we can use them in the test.
 *
 * Can't find these imports? Make sure you've run `fuels build` to generate these with typegen.
 */


/**
 * Contract Testing
 * 
 *
 * Tests for the contract program type within the TS SDK. Here we will test the deployment of
 * our contract, and the result of call it's functions.
 */
describe('Contract', () => {
  test('Deploy and Call', async () => {
    // First, we'll launch a test node, passing the contract factory and bytecode. This will deploy the contract
    // to our test node so we can test against it.
    using launched = await launchTestNode({
      // The test node will be killed automatically once the `launched` variable goes out of scope,
      // because we are instantiating it with the `using` keyword.
      contractsConfigs: [
        {
          factory: TestContractFactory,
        },
      ],
    });

    // We can now destructure the contract from the launched object.
    const {
      contracts: [contract],
    } = launched;


       // Read is_paused
       const { waitForResult: isPausedWaitForResult } = await contract.functions.is_paused().call();
       const { value: isPausedValue } = await isPausedWaitForResult();
       console.log('Is Paused:', isPausedValue);
    
    // Read owner
    const { waitForResult: ownerWaitForResult } = await contract.functions.owner().call();
    const { value: ownerValue } = await ownerWaitForResult();
    console.log('Owner:', ownerValue);


    // Read claims for a specific tree index (example: 0)
    const treeIndex = 0;
    const { waitForResult: isClaimedWaitForResult } = await contract.functions.is_claimed(treeIndex).call();
    const { value: isClaimedValue } = await isClaimedWaitForResult();
    console.log(`Is Claimed for tree index ${treeIndex}:`, isClaimedValue);


   // Assertions
   expect(ownerValue).toBeNull();
   expect(isPausedValue).toBe(false);
   // expect(isInitializedValue).toBe(false);
   expect(isClaimedValue).toBe(false);
   
  });
});
