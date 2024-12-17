import { d as createLucideIcon, r as reactExports, e as ThemeContext, f as createTheme, h as THEME_ID, i as defaultTheme, k as generateUtilityClass, l as generateUtilityClasses, s as styled, _ as _extends, m as useDefaultProps, n as extendSxProp, o as _objectWithoutPropertiesLoose, j as jsxRuntimeExports, p as clsx, q as resolveBreakpointValues, t as handleBreakpoints, v as composeClasses, w as __vitePreload, P as PINATA_JWT, x as useQuery, y as cn, z as cva } from "./index-DAnpaQVx.js";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme2 = null) {
  const contextTheme = reactExports.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
const systemDefaultTheme = createTheme();
function useTheme$1(defaultTheme2 = systemDefaultTheme) {
  return useTheme$2(defaultTheme2);
}
function useTheme() {
  const theme = useTheme$1(defaultTheme);
  return theme[THEME_ID] || theme;
}
const GridContext = /* @__PURE__ */ reactExports.createContext();
function getGridUtilityClass(slot) {
  return generateUtilityClass("MuiGrid", slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
const WRAPS = ["nowrap", "wrap-reverse", "wrap"];
const GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = generateUtilityClasses("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);
const _excluded = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function getOffset(val) {
  const parse = parseFloat(val);
  return `${parse}${String(val).replace(String(parse), "") || "px"}`;
}
function generateGrid({
  theme,
  ownerState
}) {
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    let styles = {};
    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }
    if (!size) {
      return globalStyles;
    }
    if (size === true) {
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    } else if (size === "auto") {
      styles = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    } else {
      const columnsBreakpointValues = resolveBreakpointValues({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
      if (columnValue === void 0 || columnValue === null) {
        return globalStyles;
      }
      const width = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
      let more = {};
      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);
        if (themeSpacing !== "0px") {
          const fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      }
      styles = _extends({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    }
    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
    return globalStyles;
  }, {});
}
function generateDirection({
  theme,
  ownerState
}) {
  const directionValues = resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return handleBreakpoints({
    theme
  }, directionValues, (propValue) => {
    const output = {
      flexDirection: propValue
    };
    if (propValue.indexOf("column") === 0) {
      output[`& > .${gridClasses.item}`] = {
        maxWidth: "none"
      };
    }
    return output;
  });
}
function extractZeroValueBreakpointKeys({
  breakpoints,
  values
}) {
  let nonZeroKey = "";
  Object.keys(values).forEach((key) => {
    if (nonZeroKey !== "") {
      return;
    }
    if (values[key] !== 0) {
      nonZeroKey = key;
    }
  });
  const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
    return breakpoints[a] - breakpoints[b];
  });
  return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap({
  theme,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles = {};
  if (container && rowSpacing !== 0) {
    const rowSpacingValues = resolveBreakpointValues({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof rowSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: rowSpacingValues
      });
    }
    styles = handleBreakpoints({
      theme
    }, rowSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK;
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== "0px") {
        return {
          marginTop: `-${getOffset(themeSpacing)}`,
          [`& > .${gridClasses.item}`]: {
            paddingTop: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
        return {};
      }
      return {
        marginTop: 0,
        [`& > .${gridClasses.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return styles;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles = {};
  if (container && columnSpacing !== 0) {
    const columnSpacingValues = resolveBreakpointValues({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof columnSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: columnSpacingValues
      });
    }
    styles = handleBreakpoints({
      theme
    }, columnSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK2;
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== "0px") {
        return {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${gridClasses.item}`]: {
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
        return {};
      }
      return {
        width: "100%",
        marginLeft: 0,
        [`& > .${gridClasses.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return styles;
}
function resolveSpacingStyles(spacing, breakpoints, styles = {}) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [styles[`spacing-xs-${String(spacing)}`]];
  }
  const spacingStyles = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      spacingStyles.push(styles[`spacing-${breakpoint}-${String(value)}`]);
    }
  });
  return spacingStyles;
}
const GridRoot = styled("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      container,
      direction,
      item,
      spacing,
      wrap,
      zeroMinWidth,
      breakpoints
    } = ownerState;
    let spacingStyles = [];
    if (container) {
      spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
    }
    const breakpointsStyles = [];
    breakpoints.forEach((breakpoint) => {
      const value = ownerState[breakpoint];
      if (value) {
        breakpointsStyles.push(styles[`grid-${breakpoint}-${String(value)}`]);
      }
    });
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== "row" && styles[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
  }
})(({
  ownerState
}) => _extends({
  boxSizing: "border-box"
}, ownerState.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, ownerState.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, ownerState.zeroMinWidth && {
  minWidth: 0
}, ownerState.wrap !== "wrap" && {
  flexWrap: ownerState.wrap
}), generateDirection, generateRowGap, generateColumnGap, generateGrid);
function resolveSpacingClasses(spacing, breakpoints) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [`spacing-xs-${String(spacing)}`];
  }
  const classes = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      const className = `spacing-${breakpoint}-${String(value)}`;
      classes.push(className);
    }
  });
  return classes;
}
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    container,
    direction,
    item,
    spacing,
    wrap,
    zeroMinWidth,
    breakpoints
  } = ownerState;
  let spacingClasses = [];
  if (container) {
    spacingClasses = resolveSpacingClasses(spacing, breakpoints);
  }
  const breakpointsClasses = [];
  breakpoints.forEach((breakpoint) => {
    const value = ownerState[breakpoint];
    if (value) {
      breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
    }
  });
  const slots = {
    root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
  };
  return composeClasses(slots, getGridUtilityClass, classes);
};
const Grid = /* @__PURE__ */ reactExports.forwardRef(function Grid2(inProps, ref) {
  const themeProps = useDefaultProps({
    props: inProps,
    name: "MuiGrid"
  });
  const {
    breakpoints
  } = useTheme();
  const props = extendSxProp(themeProps);
  const {
    className,
    columns: columnsProp,
    columnSpacing: columnSpacingProp,
    component = "div",
    container = false,
    direction = "row",
    item = false,
    rowSpacing: rowSpacingProp,
    spacing = 0,
    wrap = "wrap",
    zeroMinWidth = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = reactExports.useContext(GridContext);
  const columns = container ? columnsProp || 12 : columnsContext;
  const breakpointsValues = {};
  const otherFiltered = _extends({}, other);
  breakpoints.keys.forEach((breakpoint) => {
    if (other[breakpoint] != null) {
      breakpointsValues[breakpoint] = other[breakpoint];
      delete otherFiltered[breakpoint];
    }
  });
  const ownerState = _extends({}, props, {
    columns,
    container,
    direction,
    item,
    rowSpacing,
    columnSpacing,
    wrap,
    zeroMinWidth,
    spacing
  }, breakpointsValues, {
    breakpoints: breakpoints.keys
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GridContext.Provider, {
    value: columns,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(GridRoot, _extends({
      ownerState,
      className: clsx(classes.root, className),
      as: component,
      ref
    }, otherFiltered))
  });
});
var PinataError = class extends Error {
  constructor(message, statusCode, details) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = "PinataError";
  }
};
var NetworkError = class extends PinataError {
  constructor(message, statusCode, details) {
    super(message, statusCode, details);
    this.name = "NetworkError";
  }
};
var AuthenticationError = class extends PinataError {
  constructor(message, statusCode, details) {
    super(message, statusCode, details);
    this.name = "AuthenticationError";
  }
};
var ValidationError = class extends PinataError {
  constructor(message, details) {
    super(message, void 0, details);
    this.name = "ValidationError";
  }
};
var testAuthentication = async (config) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      Source: "sdk/testAuthentication"
    };
  }
  try {
    const request = await fetch(`${endpoint}/data/testAuthentication`, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(
        `Error processing authentication: ${error.message}`
      );
    }
    throw new PinataError(
      "An unknown error occurred while testing authentication"
    );
  }
};
var uploadFile = async (config, file, options) => {
  var _a, _b;
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const jwt = (options == null ? void 0 : options.keys) || config.pinataJwt;
  const data = new FormData();
  data.append("file", file, file.name);
  data.append(
    "pinataOptions",
    JSON.stringify({
      cidVersion: options == null ? void 0 : options.cidVersion,
      groupId: options == null ? void 0 : options.groupId
    })
  );
  data.append(
    "pinataMetadata",
    JSON.stringify({
      name: ((_a = options == null ? void 0 : options.metadata) == null ? void 0 : _a.name) || file.name || "File from SDK",
      keyvalues: (_b = options == null ? void 0 : options.metadata) == null ? void 0 : _b.keyValues
    })
  );
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${jwt}`,
      Source: "sdk/file"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/pinning/pinFileToIPFS`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error uploading file: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while uploading the file");
  }
};
var uploadFileArray = async (config, files, options) => {
  var _a, _b;
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const jwt = (options == null ? void 0 : options.keys) || (config == null ? void 0 : config.pinataJwt);
  const folder = ((_a = options == null ? void 0 : options.metadata) == null ? void 0 : _a.name) || "folder_from_sdk";
  const data = new FormData();
  for (const file of Array.from(files)) {
    data.append("file", file, `${folder}/${file.name}`);
  }
  data.append(
    "pinataMetadata",
    JSON.stringify({
      name: folder,
      keyvalues: (_b = options == null ? void 0 : options.metadata) == null ? void 0 : _b.keyValues
    })
  );
  data.append(
    "pinataOptions",
    JSON.stringify({
      cidVersion: options == null ? void 0 : options.cidVersion,
      groupId: options == null ? void 0 : options.groupId
    })
  );
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${jwt}`,
      Source: "sdk/fileArray"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/pinning/pinFileToIPFS`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing fileArray: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while uploading an array of files"
    );
  }
};
var uploadBase64 = async (config, base64String, options) => {
  var _a, _b, _c;
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const jwt = (options == null ? void 0 : options.keys) || (config == null ? void 0 : config.pinataJwt);
  const name = ((_a = options == null ? void 0 : options.metadata) == null ? void 0 : _a.name) ? (_b = options == null ? void 0 : options.metadata) == null ? void 0 : _b.name : "base64 string";
  const buffer = Buffer.from(base64String, "base64");
  const blob = new Blob([buffer]);
  const data = new FormData();
  data.append("file", blob, name);
  data.append(
    "pinataOptions",
    JSON.stringify({
      cidVersion: options == null ? void 0 : options.cidVersion,
      groupId: options == null ? void 0 : options.groupId
    })
  );
  data.append(
    "pinataMetadata",
    JSON.stringify({
      name,
      keyvalues: (_c = options == null ? void 0 : options.metadata) == null ? void 0 : _c.keyValues
    })
  );
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${jwt}`,
      Source: "sdk/base64"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/pinning/pinFileToIPFS`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing base64: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while trying to upload base64"
    );
  }
};
var uploadUrl = async (config, url, options) => {
  var _a, _b;
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const jwt = (options == null ? void 0 : options.keys) || (config == null ? void 0 : config.pinataJwt);
  const data = new FormData();
  const stream = await fetch(url);
  if (!stream.ok) {
    const errorData = await stream.text();
    throw new NetworkError(
      `HTTP error: ${errorData}`,
      stream.status,
      errorData
    );
  }
  const arrayBuffer = await stream.arrayBuffer();
  const blob = new Blob([arrayBuffer]);
  const name = ((_a = options == null ? void 0 : options.metadata) == null ? void 0 : _a.name) ?? "url_upload";
  const file = new File([blob], name);
  data.append("file", file, name);
  data.append(
    "pinataOptions",
    JSON.stringify({
      cidVersion: options == null ? void 0 : options.cidVersion,
      groupId: options == null ? void 0 : options.groupId
    })
  );
  data.append(
    "pinataMetadata",
    JSON.stringify({
      name,
      keyvalues: (_b = options == null ? void 0 : options.metadata) == null ? void 0 : _b.keyValues
    })
  );
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${jwt}`,
      Source: "sdk/url"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/pinning/pinFileToIPFS`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing url: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while uploading by url");
  }
};
var uploadJson = async (config, jsonData, options) => {
  var _a, _b;
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const jwt = (options == null ? void 0 : options.keys) || (config == null ? void 0 : config.pinataJwt);
  const data = JSON.stringify({
    pinataContent: jsonData,
    pinataOptions: {
      cidVersion: options == null ? void 0 : options.cidVersion,
      groupId: options == null ? void 0 : options.groupId
    },
    pinataMetadata: {
      name: ((_a = options == null ? void 0 : options.metadata) == null ? void 0 : _a.name) || "json",
      keyvalues: (_b = options == null ? void 0 : options.metadata) == null ? void 0 : _b.keyValues
    }
  });
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
      Source: "sdk/json"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/pinning/pinJSONToIPFS`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing json: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while uploading json");
  }
};
var uploadCid = async (config, cid, options) => {
  var _a, _b;
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const jwt = (options == null ? void 0 : options.keys) || (config == null ? void 0 : config.pinataJwt);
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
      Source: "sdk/cid"
    };
  }
  const data = JSON.stringify({
    hashToPin: cid,
    pinataMetadata: {
      name: (options == null ? void 0 : options.metadata) ? (_a = options == null ? void 0 : options.metadata) == null ? void 0 : _a.name : cid,
      keyvalues: (_b = options == null ? void 0 : options.metadata) == null ? void 0 : _b.keyValues
    },
    pinataOptions: {
      hostNodes: (options == null ? void 0 : options.peerAddresses) ? options.peerAddresses : "",
      groupId: options == null ? void 0 : options.groupId
    }
  });
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/pinning/pinByHash`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing cid: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while pinning by CID");
  }
};
var wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};
var unpinFile = async (config, files) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const responses = [];
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      Source: "sdk/unpin"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  for (const hash of files) {
    try {
      const response = await fetch(`${endpoint}/pinning/unpin/${hash}`, {
        method: "DELETE",
        headers
      });
      await wait(300);
      if (!response.ok) {
        const errorData = await response.text();
        if (response.status === 401) {
          throw new AuthenticationError(
            `Authentication failed: ${errorData}`,
            response.status,
            errorData
          );
        }
        throw new NetworkError(
          `HTTP error: ${errorData}`,
          response.status,
          errorData
        );
      }
      const result = await response.text();
      responses.push({
        hash,
        status: result
      });
    } catch (error) {
      let errorMessage;
      if (error instanceof PinataError) {
        errorMessage = error.message;
      } else if (error instanceof Error) {
        errorMessage = `Error unpinning file ${hash}: ${error.message}`;
      } else {
        errorMessage = `An unknown error occurred while unpinning file ${hash}`;
      }
      responses.push({
        hash,
        status: errorMessage
      });
    }
  }
  return responses;
};
var listFiles = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const params = new URLSearchParams({
    includesCount: "false"
  });
  if (options) {
    const {
      cid,
      pinStart,
      pinEnd,
      pinSizeMin,
      pinSizeMax,
      pageLimit,
      pageOffset,
      name,
      key,
      value,
      operator,
      groupId
    } = options;
    if (cid)
      params.append("cid", cid);
    if (pinStart)
      params.append("pinStart", pinStart);
    if (pinEnd)
      params.append("pinEnd", pinEnd);
    if (pinSizeMin)
      params.append("pinSizeMin", pinSizeMin.toString());
    if (pinSizeMax)
      params.append("pinSizeMax", pinSizeMax.toString());
    if (pageLimit)
      params.append("pageLimit", pageLimit.toString());
    if (pageOffset)
      params.append("pageOffset", pageOffset.toString());
    if (groupId)
      params.append("groupId", groupId);
    if (name)
      params.append("metadata[name]", name);
    if (key && value) {
      const keyValueParam = JSON.stringify({
        [key]: { value, op: operator || "eq" }
      });
      params.append("metadata[keyvalues]", keyValueParam);
    }
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  const url = `${endpoint}/data/pinList?status=pinned&${params.toString()}`;
  try {
    let headers;
    if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
      headers = { ...config.customHeaders };
    } else {
      headers = {
        Authorization: `Bearer ${config.pinataJwt}`,
        Source: "sdk/listFiles"
      };
    }
    const request = await fetch(url, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res.rows;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing list files: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while listing files");
  }
};
var updateMetadata = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const data = {
    ipfsPinHash: options.cid,
    name: options.name,
    keyvalues: options.keyValues
  };
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/updateMetadata"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/pinning/hashMetadata`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data)
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.text();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(
        `Error processing updateMetadata: ${error.message}`
      );
    }
    throw new PinataError("An unknown error occurred while updating metadata");
  }
};
var isIPFSModule;
async function getIsIPFS() {
  if (!isIPFSModule) {
    isIPFSModule = await __vitePreload(() => import("./index-4BIqSA4o.js"), true ? [] : void 0);
  }
  return isIPFSModule;
}
async function containsCID(input) {
  if (typeof input !== "string") {
    throw new Error("Input is not a string");
  }
  const isIPFS = await getIsIPFS();
  const startsWithCID = (str) => {
    const parts = str.split("/");
    return isIPFS.cid(parts[0]) ? parts[0] : null;
  };
  const directCID = startsWithCID(input);
  if (directCID) {
    return {
      containsCid: true,
      cid: directCID
    };
  }
  let url;
  try {
    url = new URL(input);
  } catch (error) {
    const parts = input.split(/\/|\?/);
    for (const part of parts) {
      const cid = startsWithCID(part);
      if (cid) {
        return {
          containsCid: true,
          cid
        };
      }
    }
    return {
      containsCid: false,
      cid: null
    };
  }
  const subdomains = url.hostname.split(".");
  for (const subdomain of subdomains) {
    if (isIPFS.cid(subdomain)) {
      return {
        containsCid: true,
        cid: subdomain
      };
    }
  }
  const pathParts = url.pathname.split("/");
  for (const part of pathParts) {
    const cid = startsWithCID(part);
    if (cid) {
      return {
        containsCid: true,
        cid
      };
    }
  }
  return {
    containsCid: false,
    cid: null
  };
}
async function convertToDesiredGateway(sourceUrl, desiredGatewayPrefix) {
  const results = await containsCID(sourceUrl);
  if (results.containsCid !== true) {
    throw new Error("url does not contain CID");
  }
  if (!sourceUrl.startsWith("https") && !sourceUrl.startsWith("ipfs://")) {
    return `${desiredGatewayPrefix}/ipfs/${sourceUrl}`;
  }
  const urlObj = new URL(sourceUrl);
  const path = urlObj.pathname + urlObj.search + urlObj.hash;
  if (sourceUrl.startsWith(`ipfs://${results.cid}`)) {
    return `${desiredGatewayPrefix}/ipfs/${results.cid}${path}`;
  }
  if (sourceUrl.includes(`/ipfs/${results.cid}`)) {
    return `${desiredGatewayPrefix}${path}`;
  }
  if (sourceUrl.includes(`/ipns/${results.cid}`)) {
    return `${desiredGatewayPrefix}${path}`;
  }
  if (urlObj.hostname.includes(results.cid)) {
    return `${desiredGatewayPrefix}/ipfs/${results.cid}${path}`;
  }
  throw new Error(
    "unsupported URL pattern, please submit a github issue with the URL utilized"
  );
}
var getCid = async (config, cid, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let data;
  let newUrl;
  newUrl = await convertToDesiredGateway(cid, config == null ? void 0 : config.pinataGateway);
  const params = new URLSearchParams();
  if (config == null ? void 0 : config.pinataGatewayKey) {
    params.append("pinataGatewayToken", config.pinataGatewayKey);
  }
  if (options) {
    if (options.width)
      params.append("img-width", options.width.toString());
    if (options.height)
      params.append("img-height", options.height.toString());
    if (options.dpr)
      params.append("img-dpr", options.dpr.toString());
    if (options.fit)
      params.append("img-fit", options.fit);
    if (options.gravity)
      params.append("img-gravity", options.gravity);
    if (options.quality)
      params.append("img-quality", options.quality.toString());
    if (options.format)
      params.append("img-format", options.format);
    if (options.animation !== void 0)
      params.append("img-anim", options.animation.toString());
    if (options.sharpen)
      params.append("img-sharpen", options.sharpen.toString());
    if (options.onError === true)
      params.append("img-onerror", "redirect");
    if (options.metadata)
      params.append("img-metadata", options.metadata);
  }
  const queryString = params.toString();
  if (queryString) {
    newUrl += `?${queryString}`;
  }
  try {
    const request = await fetch(newUrl);
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication Failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const contentType = request.headers.get("content-type");
    if (contentType == null ? void 0 : contentType.includes("application/json")) {
      data = await request.json();
    } else if (contentType == null ? void 0 : contentType.includes("text/")) {
      data = await request.text();
    } else {
      data = await request.blob();
    }
    const res = {
      data,
      contentType
    };
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing getCid: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while getting CID contents"
    );
  }
};
var convertIPFSUrl = async (config, url, gatewayPrefix) => {
  let newUrl;
  let prefix = gatewayPrefix || (config == null ? void 0 : config.pinataGateway) || "https://gateway.pinata.cloud";
  newUrl = await convertToDesiredGateway(url, prefix);
  if (config == null ? void 0 : config.pinataGatewayKey) {
    `${newUrl}?pinataGatewayToken=${config == null ? void 0 : config.pinataGatewayKey}`;
  }
  return newUrl;
};
var pinJobs = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const params = new URLSearchParams({
    includesCount: "false"
  });
  if (options) {
    const { ipfs_pin_hash: cid, status, sort, limit, offset } = options;
    if (cid)
      params.append("ipfs_pin_hash", cid.toString());
    if (status)
      params.append("status", status.toString());
    if (sort)
      params.append("sort", sort.toString());
    if (limit)
      params.append("limit", limit.toString());
    if (offset)
      params.append("offset", offset.toString());
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  const url = `${endpoint}/pinning/pinJobs?${params.toString()}`;
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      Source: "sdk/pinJobs"
    };
  }
  try {
    const request = await fetch(url, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res.rows;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing pinJobs: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while listing pin jobs");
  }
};
var pinnedFileCount = async (config) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      Source: "sdk/pinnedFileUsage"
    };
  }
  try {
    const request = await fetch(`${endpoint}/data/userPinnedDataTotal`, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res.pin_count;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(
        `Error processing pinnedFileUsage: ${error.message}`
      );
    }
    throw new PinataError(
      "An unknown error occurred while getting pinned file usage"
    );
  }
};
var totalStorageUsage = async (config) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      Source: "sdk/totalStorageUsage"
    };
  }
  try {
    const request = await fetch(`${endpoint}/data/userPinnedDataTotal`, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res.pin_size_total;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(
        `Error processing totalStorageUsage: ${error.message}`
      );
    }
    throw new PinataError(
      "An unknown error occurred while getting total storage usage"
    );
  }
};
var createKey = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/createKey"
    };
  }
  const data = JSON.stringify(options);
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/v3/pinata/keys`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing createKey: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while creating API key");
  }
};
var listKeys = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/listKeys"
    };
  }
  const params = new URLSearchParams();
  if (options) {
    const { offset, name, revoked, limitedUse, exhausted } = options;
    if (offset)
      params.append("offset", offset.toString());
    if (revoked !== void 0)
      params.append("revoked", revoked.toString());
    if (limitedUse !== void 0)
      params.append("limitedUse", limitedUse.toString());
    if (exhausted !== void 0)
      params.append("exhausted", exhausted.toString());
    if (name)
      params.append("name", name);
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(
      `${endpoint}/v3/pinata/keys?${params.toString()}`,
      {
        method: "GET",
        headers
      }
    );
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res.keys;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing listKeys: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while listing API keys");
  }
};
var wait2 = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};
var revokeKeys = async (config, keys) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/revokeKeys"
    };
  }
  const responses = [];
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  for (const key of keys) {
    try {
      const request = await fetch(`${endpoint}/v3/pinata/keys/${key}`, {
        method: "PUT",
        headers
      });
      await wait2(300);
      if (!request.ok) {
        const errorData = await request.text();
        if (request.status === 401 || request.status === 403) {
          throw new AuthenticationError(
            `Authentication failed: ${errorData}`,
            request.status,
            errorData
          );
        }
        throw new NetworkError(
          `HTTP error: ${errorData}`,
          request.status,
          errorData
        );
      }
      const result = await request.json();
      responses.push({
        key,
        status: result
      });
    } catch (error) {
      let errorMessage;
      if (error instanceof PinataError) {
        errorMessage = error.message;
      } else if (error instanceof Error) {
        errorMessage = `Error revoking key ${key}: ${error.message}`;
      } else {
        errorMessage = `An unknown error occurred while revoking key ${key}`;
      }
      responses.push({
        key,
        status: errorMessage
      });
    }
  }
  return responses;
};
var createGroup = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const data = JSON.stringify(options);
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/createGroup"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/groups`, {
      method: "POST",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing createGroup: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while creating a group");
  }
};
var listGroups = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/listGroups"
    };
  }
  const params = new URLSearchParams();
  if (options) {
    const { offset, nameContains, limit } = options;
    if (offset)
      params.append("offset", offset.toString());
    if (nameContains !== void 0)
      params.append("nameContains", nameContains.toString());
    if (limit !== void 0)
      params.append("limit", limit.toString());
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/groups?${params.toString()}`, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing listGroups: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while listing groups");
  }
};
var getGroup = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/getGroup"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/groups/${options.groupId}`, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing getGroup: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while getting info for a group"
    );
  }
};
var addToGroup = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const data = JSON.stringify({
    cids: options.cids
  });
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/addToGroup"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/groups/${options.groupId}/cids`, {
      method: "PUT",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.text();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing addToGroup: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while adding CIDs to group"
    );
  }
};
var updateGroup = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const data = JSON.stringify({
    name: options.name
  });
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/updateGroup"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/groups/${options.groupId}`, {
      method: "PUT",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing updateGroup: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while updating group");
  }
};
var removeFromGroup = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/removeFromGroup"
    };
  }
  const data = JSON.stringify({
    cids: options.cids
  });
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/groups/${options.groupId}/cids`, {
      method: "DELETE",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.text();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(
        `Error processing removeFromGroup: ${error.message}`
      );
    }
    throw new PinataError(
      "An unknown error occurred while removing CIDs from a group"
    );
  }
};
var deleteGroup = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/deleteGroup"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/groups/${options.groupId}`, {
      method: "DELETE",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.text();
    return res;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing deleteGroup: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while deleting a group");
  }
};
var addSignature = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const data = JSON.stringify({
    signature: options.signature
  });
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/addSignature"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(
      `${endpoint}/v3/ipfs/signature/${options.cid}`,
      {
        method: "POST",
        headers,
        body: data
      }
    );
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      if (request.status === 403) {
        throw new PinataError(
          "Unauthorized signing, you must be the original owner of the file and it must not have a signature",
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res.data;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing addSignature: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while adding signature to CID"
    );
  }
};
var getSignature = async (config, cid) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/getSignature"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/v3/ipfs/signature/${cid}`, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    return res.data;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing getSignature: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while fetching signature for CID"
    );
  }
};
var removeSignature = async (config, cid) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/removeSignature"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/v3/ipfs/signature/${cid}`, {
      method: "DELETE",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    return "OK";
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing addSignature: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while adding signature to CID"
    );
  }
};
var analyticsTopUsage = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const params = new URLSearchParams({
    includesCount: "false"
  });
  if (options) {
    const {
      cid,
      gateway_domain,
      start_date,
      end_date,
      file_name,
      user_agent,
      country,
      region,
      referer,
      limit,
      sort_order,
      sort_by,
      attribute
    } = options;
    if (cid)
      params.append("cid", cid);
    if (gateway_domain)
      params.append("gateway_domain", gateway_domain);
    if (start_date)
      params.append("start_date", start_date);
    if (end_date)
      params.append("end_date", end_date);
    if (file_name)
      params.append("file_name", file_name);
    if (user_agent)
      params.append("user_agent", user_agent.toString());
    if (country)
      params.append("country", country.toString());
    if (region)
      params.append("region", region);
    if (referer)
      params.append("referer", referer.toString());
    if (limit)
      params.append("limit", limit.toString());
    if (sort_order)
      params.append("sort_order", sort_order);
    if (sort_by)
      params.append("sort_by", sort_by);
    if (attribute)
      params.append("by", attribute);
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  const url = `${endpoint}/v3/ipfs/gateway_analytics_top?${params.toString()}`;
  try {
    let headers;
    if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
      headers = { ...config.customHeaders };
    } else {
      headers = {
        Authorization: `Bearer ${config.pinataJwt}`,
        Source: "sdk/analyticsTopUsage"
      };
    }
    const request = await fetch(url, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    const resData = res.data;
    return resData;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(
        `Error processing anaytics usage: ${error.message}`
      );
    }
    throw new PinataError(
      "An unknown error occurred while fetching gateway usage"
    );
  }
};
var analyticsDateInterval = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const params = new URLSearchParams();
  if (options) {
    const {
      cid,
      gateway_domain,
      start_date,
      end_date,
      file_name,
      user_agent,
      country,
      region,
      referer,
      limit,
      sort_order,
      date_interval,
      sort_by
    } = options;
    if (cid)
      params.append("cid", cid);
    if (gateway_domain)
      params.append("gateway_domain", gateway_domain);
    if (start_date)
      params.append("start_date", start_date);
    if (end_date)
      params.append("end_date", end_date);
    if (file_name)
      params.append("file_name", file_name);
    if (user_agent)
      params.append("user_agent", user_agent.toString());
    if (country)
      params.append("country", country.toString());
    if (region)
      params.append("region", region);
    if (referer)
      params.append("referer", referer.toString());
    if (limit)
      params.append("limit", limit.toString());
    if (sort_order)
      params.append("sort_order", sort_order);
    if (sort_by)
      params.append("sort_by", sort_by);
    if (date_interval)
      params.append("by", date_interval);
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  const url = `${endpoint}/v3/ipfs/gateway_analytics_time_series?${params.toString()}`;
  try {
    let headers;
    if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
      headers = { ...config.customHeaders };
    } else {
      headers = {
        Authorization: `Bearer ${config.pinataJwt}`,
        Source: "sdk/analyticsDateInterval"
      };
    }
    const request = await fetch(url, {
      method: "GET",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    const resData = res.data;
    return resData;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(
        `Error processing anaytics usage: ${error.message}`
      );
    }
    throw new PinataError(
      "An unknown error occurred while fetching gateway usage"
    );
  }
};
var swapCid = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  const data = JSON.stringify({
    swapCid: options.swapCid
  });
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/swapCid"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/v3/ipfs/swap/${options.cid}`, {
      method: "PUT",
      headers,
      body: data
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      if (request.status === 403) {
        throw new PinataError(
          "Unauthorized CID Swap",
          request.status,
          errorData
        );
      }
      if (request.status === 404) {
        throw new PinataError(
          "CID not pinned to account",
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    const resData = res.data;
    return resData;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing CID Swap: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while swapping CID");
  }
};
var swapHistory = async (config, options) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/swapHistory"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(
      `${endpoint}/v3/ipfs/swap/${options.cid}?domain=${options.domain}`,
      {
        method: "GET",
        headers
      }
    );
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      if (request.status === 404) {
        throw new PinataError(
          "CID does not have history",
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    const res = await request.json();
    const resData = res.data;
    return resData;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error fetching swap history: ${error.message}`);
    }
    throw new PinataError(
      "An unknown error occurred while fetching swap history"
    );
  }
};
var deleteSwap = async (config, cid) => {
  if (!config) {
    throw new ValidationError("Pinata configuration is missing");
  }
  let headers;
  if (config.customHeaders && Object.keys(config.customHeaders).length > 0) {
    headers = { ...config.customHeaders };
  } else {
    headers = {
      Authorization: `Bearer ${config.pinataJwt}`,
      "Content-Type": "application/json",
      Source: "sdk/deleteSwap"
    };
  }
  let endpoint = "https://api.pinata.cloud";
  if (config.endpointUrl) {
    endpoint = config.endpointUrl;
  }
  try {
    const request = await fetch(`${endpoint}/v3/ipfs/swap/${cid}`, {
      method: "DELETE",
      headers
    });
    if (!request.ok) {
      const errorData = await request.text();
      if (request.status === 401 || request.status === 403) {
        throw new AuthenticationError(
          `Authentication failed: ${errorData}`,
          request.status,
          errorData
        );
      }
      if (request.status === 403) {
        throw new PinataError(
          "Unauthorized CID Swap Deletion",
          request.status,
          errorData
        );
      }
      if (request.status === 404) {
        throw new PinataError(
          "CID not pinned to account",
          request.status,
          errorData
        );
      }
      throw new NetworkError(
        `HTTP error: ${errorData}`,
        request.status,
        errorData
      );
    }
    return request.statusText;
  } catch (error) {
    if (error instanceof PinataError) {
      throw error;
    }
    if (error instanceof Error) {
      throw new PinataError(`Error processing deleteSwap: ${error.message}`);
    }
    throw new PinataError("An unknown error occurred while deleting swap");
  }
};
var formatConfig = (config) => {
  let gateway = config == null ? void 0 : config.pinataGateway;
  if (config && gateway) {
    if (gateway && !gateway.startsWith("https://")) {
      gateway = `https://${gateway}`;
    }
    config.pinataGateway = gateway;
  }
  return config;
};
var PinataSDK = class {
  constructor(config) {
    this.config = formatConfig(config);
    this.upload = new Upload(this.config);
    this.gateways = new Gateways(this.config);
    this.usage = new Usage(this.config);
    this.keys = new Keys(this.config);
    this.groups = new Groups(this.config);
    this.signatures = new Signatures(this.config);
  }
  setNewHeaders(headers) {
    if (!this.config) {
      this.config = { pinataJwt: "", customHeaders: {} };
    }
    this.config.customHeaders = { ...this.config.customHeaders, ...headers };
    this.upload.updateConfig(this.config);
    this.gateways.updateConfig(this.config);
    this.usage.updateConfig(this.config);
    this.keys.updateConfig(this.config);
    this.groups.updateConfig(this.config);
    this.signatures.updateConfig(this.config);
  }
  testAuthentication() {
    return testAuthentication(this.config);
  }
  unpin(files) {
    return unpinFile(this.config, files);
  }
  listFiles() {
    return new FilterFiles(this.config);
  }
  updateMetadata(options) {
    return updateMetadata(this.config, options);
  }
  pinJobs() {
    return new FilterPinJobs(this.config);
  }
};
var UploadBuilder = class {
  constructor(config, uploadFunction, ...args) {
    this.config = config;
    this.uploadFunction = uploadFunction;
    this.args = args;
    this.version = 1;
  }
  addMetadata(metadata) {
    this.metadata = metadata;
    return this;
  }
  key(jwt) {
    this.keys = jwt;
    return this;
  }
  cidVersion(v) {
    this.version = v;
    return this;
  }
  group(groupId) {
    this.groupId = groupId;
    return this;
  }
  peerAddress(peerAddresses) {
    this.peerAddresses = peerAddresses;
    return this;
  }
  then(onfulfilled, onrejected) {
    const options = this.args[this.args.length - 1] || {};
    if (this.metadata) {
      options.metadata = this.metadata;
    }
    if (this.keys) {
      options.keys = this.keys;
    }
    if (this.groupId) {
      options.groupId = this.groupId;
    }
    if (this.version) {
      options.cidVersion = this.version;
    }
    if (this.peerAddresses && "peerAddresses" in options) {
      options.peerAddresses = this.peerAddresses;
    }
    this.args[this.args.length - 1] = options;
    return this.uploadFunction(this.config, ...this.args).then(
      onfulfilled,
      onrejected
    );
  }
};
var Upload = class {
  constructor(config) {
    this.config = formatConfig(config);
  }
  updateConfig(newConfig) {
    this.config = newConfig;
  }
  file(file, options) {
    return new UploadBuilder(this.config, uploadFile, file, options);
  }
  fileArray(files, options) {
    return new UploadBuilder(this.config, uploadFileArray, files, options);
  }
  base64(base64String, options) {
    return new UploadBuilder(this.config, uploadBase64, base64String, options);
  }
  url(url, options) {
    return new UploadBuilder(this.config, uploadUrl, url, options);
  }
  json(data, options) {
    return new UploadBuilder(this.config, uploadJson, data, options);
  }
  cid(cid, options) {
    return new UploadBuilder(this.config, uploadCid, cid, options);
  }
};
var FilterFiles = class {
  constructor(config) {
    this.query = {};
    this.requestCount = 0;
    this.lastRequestTime = 0;
    this.MAX_REQUESTS_PER_MINUTE = 30;
    this.MINUTE_IN_MS = 6e4;
    this.config = config;
  }
  cid(cid) {
    this.query.cid = cid;
    return this;
  }
  pinStart(date) {
    this.query.pinStart = date;
    return this;
  }
  pinEnd(date) {
    this.query.pinEnd = date;
    return this;
  }
  pinSizeMin(size) {
    this.query.pinSizeMin = size;
    return this;
  }
  pinSizeMax(size) {
    this.query.pinSizeMax = size;
    return this;
  }
  pageLimit(limit) {
    this.query.pageLimit = limit;
    return this;
  }
  pageOffset(offset) {
    this.query.pageOffset = offset;
    return this;
  }
  name(name) {
    this.query.name = name;
    return this;
  }
  group(groupId) {
    this.query.groupId = groupId;
    return this;
  }
  keyValue(key, value, operator) {
    this.query.key = key;
    this.query.value = value;
    if (operator) {
      this.query.operator = operator;
    }
    return this;
  }
  then(onfulfilled) {
    return listFiles(this.config, this.query).then(onfulfilled);
  }
  // rate limit, hopefully temporary?
  async rateLimit() {
    this.requestCount++;
    const now = Date.now();
    if (this.requestCount >= this.MAX_REQUESTS_PER_MINUTE) {
      const timePassedSinceLastRequest = now - this.lastRequestTime;
      if (timePassedSinceLastRequest < this.MINUTE_IN_MS) {
        const delayTime = this.MINUTE_IN_MS - timePassedSinceLastRequest;
        await new Promise((resolve) => setTimeout(resolve, delayTime));
      }
      this.requestCount = 0;
    }
    this.lastRequestTime = Date.now();
  }
  async *[Symbol.asyncIterator]() {
    let hasMore = true;
    let offset = 0;
    const limit = this.query.pageLimit || 10;
    while (hasMore) {
      await this.rateLimit();
      this.query.pageOffset = offset;
      this.query.pageLimit = limit;
      const items = await listFiles(this.config, this.query);
      for (const item of items) {
        yield item;
      }
      if (items.length === 0) {
        hasMore = false;
      } else {
        offset += items.length;
      }
    }
  }
  async all() {
    const allItems = [];
    for await (const item of this) {
      allItems.push(item);
    }
    return allItems;
  }
};
var Gateways = class {
  constructor(config) {
    this.config = formatConfig(config);
  }
  updateConfig(newConfig) {
    this.config = newConfig;
  }
  get(cid) {
    return new OptimizeImage(this.config, cid);
  }
  convert(url, gatewayPrefix) {
    return convertIPFSUrl(this.config, url, gatewayPrefix);
  }
  containsCID(cid) {
    return containsCID(cid);
  }
  topUsageAnalytics(options) {
    return new TopGatewayAnalyticsBuilder(
      this.config,
      options.domain,
      options.start,
      options.end,
      options.sortBy,
      options.attribute
    );
  }
  dateIntervalAnalytics(options) {
    return new TimeIntervalGatewayAnalyticsBuilder(
      this.config,
      options.domain,
      options.start,
      options.end,
      options.interval
    );
  }
  swapCid(options) {
    return swapCid(this.config, options);
  }
  swapHistory(options) {
    return swapHistory(this.config, options);
  }
  deleteSwap(cid) {
    return deleteSwap(this.config, cid);
  }
};
var OptimizeImage = class {
  constructor(config, cid) {
    this.options = {};
    this.config = config;
    this.cid = cid;
  }
  optimizeImage(options) {
    this.options = { ...this.options, ...options };
    return this;
  }
  then(onfulfilled) {
    return getCid(this.config, this.cid, this.options).then(onfulfilled);
  }
};
var FilterPinJobs = class {
  constructor(config) {
    this.query = {};
    this.requestCount = 0;
    this.lastRequestTime = 0;
    this.MAX_REQUESTS_PER_MINUTE = 30;
    this.MINUTE_IN_MS = 6e4;
    this.config = config;
  }
  cid(cid) {
    this.query.ipfs_pin_hash = cid;
    return this;
  }
  status(status) {
    this.query.status = status;
    return this;
  }
  pageLimit(limit) {
    this.query.limit = limit;
    return this;
  }
  pageOffset(offset) {
    this.query.offset = offset;
    return this;
  }
  sort(sort) {
    this.query.sort = sort;
    return this;
  }
  then(onfulfilled) {
    return pinJobs(this.config, this.query).then(onfulfilled);
  }
  // rate limit, hopefully temporary?
  async rateLimit() {
    this.requestCount++;
    const now = Date.now();
    if (this.requestCount >= this.MAX_REQUESTS_PER_MINUTE) {
      const timePassedSinceLastRequest = now - this.lastRequestTime;
      if (timePassedSinceLastRequest < this.MINUTE_IN_MS) {
        const delayTime = this.MINUTE_IN_MS - timePassedSinceLastRequest;
        await new Promise((resolve) => setTimeout(resolve, delayTime));
      }
      this.requestCount = 0;
    }
    this.lastRequestTime = Date.now();
  }
  async *[Symbol.asyncIterator]() {
    let hasMore = true;
    let offset = 0;
    const limit = this.query.limit || 10;
    while (hasMore) {
      await this.rateLimit();
      this.query.offset = offset;
      this.query.limit = limit;
      const items = await pinJobs(this.config, this.query);
      for (const item of items) {
        yield item;
      }
      if (items.length === 0) {
        hasMore = false;
      } else {
        offset += items.length;
      }
    }
  }
  async all() {
    const allItems = [];
    for await (const item of this) {
      allItems.push(item);
    }
    return allItems;
  }
};
var Usage = class {
  constructor(config) {
    this.config = formatConfig(config);
  }
  updateConfig(newConfig) {
    this.config = newConfig;
  }
  pinnedFileCount() {
    return pinnedFileCount(this.config);
  }
  totalStorageSize() {
    return totalStorageUsage(this.config);
  }
};
var Keys = class {
  constructor(config) {
    this.config = formatConfig(config);
  }
  updateConfig(newConfig) {
    this.config = newConfig;
  }
  create(options) {
    return createKey(this.config, options);
  }
  list() {
    return new FilterKeys(this.config);
  }
  revoke(keys) {
    return revokeKeys(this.config, keys);
  }
};
var FilterKeys = class {
  constructor(config) {
    this.query = {};
    this.requestCount = 0;
    this.lastRequestTime = 0;
    this.MAX_REQUESTS_PER_MINUTE = 30;
    this.MINUTE_IN_MS = 6e4;
    this.config = config;
  }
  offset(offset) {
    this.query.offset = offset;
    return this;
  }
  revoked(revoked) {
    this.query.revoked = revoked;
    return this;
  }
  limitedUse(limitedUse) {
    this.query.limitedUse = limitedUse;
    return this;
  }
  exhausted(exhausted) {
    this.query.exhausted = exhausted;
    return this;
  }
  name(name) {
    this.query.name = name;
    return this;
  }
  then(onfulfilled) {
    return listKeys(this.config, this.query).then(onfulfilled);
  }
  // rate limit, hopefully temporary?
  async rateLimit() {
    this.requestCount++;
    const now = Date.now();
    if (this.requestCount >= this.MAX_REQUESTS_PER_MINUTE) {
      const timePassedSinceLastRequest = now - this.lastRequestTime;
      if (timePassedSinceLastRequest < this.MINUTE_IN_MS) {
        const delayTime = this.MINUTE_IN_MS - timePassedSinceLastRequest;
        await new Promise((resolve) => setTimeout(resolve, delayTime));
      }
      this.requestCount = 0;
    }
    this.lastRequestTime = Date.now();
  }
  async *[Symbol.asyncIterator]() {
    let hasMore = true;
    let offset = 0;
    while (hasMore) {
      await this.rateLimit();
      this.query.offset = offset;
      const items = await listKeys(this.config, this.query);
      for (const item of items) {
        yield item;
      }
      if (items.length === 0) {
        hasMore = false;
      } else {
        offset += items.length;
      }
    }
  }
  async all() {
    const allItems = [];
    for await (const item of this) {
      allItems.push(item);
    }
    return allItems;
  }
};
var Groups = class {
  constructor(config) {
    this.config = formatConfig(config);
  }
  updateConfig(newConfig) {
    this.config = newConfig;
  }
  create(options) {
    return createGroup(this.config, options);
  }
  list() {
    return new FilterGroups(this.config);
  }
  get(options) {
    return getGroup(this.config, options);
  }
  addCids(options) {
    return addToGroup(this.config, options);
  }
  removeCids(options) {
    return removeFromGroup(this.config, options);
  }
  update(options) {
    return updateGroup(this.config, options);
  }
  delete(options) {
    return deleteGroup(this.config, options);
  }
};
var FilterGroups = class {
  constructor(config) {
    this.query = {};
    this.requestCount = 0;
    this.lastRequestTime = 0;
    this.MAX_REQUESTS_PER_MINUTE = 30;
    this.MINUTE_IN_MS = 6e4;
    this.config = config;
  }
  offset(offset) {
    this.query.offset = offset;
    return this;
  }
  name(nameContains) {
    this.query.nameContains = nameContains;
    return this;
  }
  limit(limit) {
    this.query.limit = limit;
    return this;
  }
  then(onfulfilled) {
    return listGroups(this.config, this.query).then(onfulfilled);
  }
  // rate limit, hopefully temporary?
  async rateLimit() {
    this.requestCount++;
    const now = Date.now();
    if (this.requestCount >= this.MAX_REQUESTS_PER_MINUTE) {
      const timePassedSinceLastRequest = now - this.lastRequestTime;
      if (timePassedSinceLastRequest < this.MINUTE_IN_MS) {
        const delayTime = this.MINUTE_IN_MS - timePassedSinceLastRequest;
        await new Promise((resolve) => setTimeout(resolve, delayTime));
      }
      this.requestCount = 0;
    }
    this.lastRequestTime = Date.now();
  }
  async *[Symbol.asyncIterator]() {
    let hasMore = true;
    let offset = 0;
    while (hasMore) {
      await this.rateLimit();
      this.query.offset = offset;
      const items = await listGroups(this.config, this.query);
      for (const item of items) {
        yield item;
      }
      if (items.length === 0) {
        hasMore = false;
      } else {
        offset += items.length;
      }
    }
  }
  async all() {
    const allItems = [];
    for await (const item of this) {
      allItems.push(item);
    }
    return allItems;
  }
};
var Signatures = class {
  constructor(config) {
    this.config = formatConfig(config);
  }
  updateConfig(newConfig) {
    this.config = newConfig;
  }
  add(options) {
    return addSignature(this.config, options);
  }
  get(cid) {
    return getSignature(this.config, cid);
  }
  delete(cid) {
    return removeSignature(this.config, cid);
  }
};
var GatewayAnalyticsBuilder = class {
  constructor(config, query) {
    this.requestCount = 0;
    this.lastRequestTime = 0;
    this.MAX_REQUESTS_PER_MINUTE = 30;
    this.MINUTE_IN_MS = 6e4;
    this.config = config;
    this.query = query;
  }
  cid(cid) {
    this.query.cid = cid;
    return this;
  }
  fileName(fileName) {
    this.query.file_name = fileName;
    return this;
  }
  userAgent(userAgent) {
    this.query.user_agent = userAgent;
    return this;
  }
  country(country) {
    this.query.country = country;
    return this;
  }
  region(region) {
    this.query.region = region;
    return this;
  }
  referer(referer) {
    this.query.referer = referer;
    return this;
  }
  limit(limit) {
    this.query.limit = limit;
    return this;
  }
  sort(order) {
    this.query.sort_order = order;
    return this;
  }
  async rateLimit() {
    this.requestCount++;
    const now = Date.now();
    if (this.requestCount >= this.MAX_REQUESTS_PER_MINUTE) {
      const timePassedSinceLastRequest = now - this.lastRequestTime;
      if (timePassedSinceLastRequest < this.MINUTE_IN_MS) {
        const delayTime = this.MINUTE_IN_MS - timePassedSinceLastRequest;
        await new Promise((resolve) => setTimeout(resolve, delayTime));
      }
      this.requestCount = 0;
    }
    this.lastRequestTime = Date.now();
  }
  async getAnalytics() {
    await this.rateLimit();
    throw new Error("getAnalytics method must be implemented in derived class");
  }
  then(onfulfilled) {
    return this.getAnalytics().then(onfulfilled);
  }
};
var TopGatewayAnalyticsBuilder = class extends GatewayAnalyticsBuilder {
  constructor(config, domain, start, end, sortBy, attribute) {
    super(config, {
      gateway_domain: domain,
      start_date: start,
      end_date: end,
      sort_by: sortBy,
      attribute
    });
  }
  async getAnalytics() {
    return analyticsTopUsage(this.config, this.query);
  }
  async all() {
    return this.getAnalytics();
  }
};
var TimeIntervalGatewayAnalyticsBuilder = class extends GatewayAnalyticsBuilder {
  constructor(config, domain, start, end, dateInterval) {
    super(config, {
      gateway_domain: domain,
      start_date: start,
      end_date: end,
      date_interval: dateInterval
    });
  }
  sortBy(sortBy) {
    this.query.sort_by = sortBy;
    return this;
  }
  async getAnalytics() {
    return analyticsDateInterval(this.config, this.query);
  }
  async all() {
    return this.getAnalytics();
  }
};
const pinata = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: "gateway.pinata.cloud"
});
const useGetAirdropData = () => {
  return useQuery({
    queryKey: ["airdropData"],
    queryFn: async () => {
      try {
        const ipfsData = (await pinata.listFiles()).filter(
          (file) => file.metadata.name === "AirdropData"
        );
        const airdropData = await Promise.all(
          ipfsData.map(async (file) => {
            const res = await pinata.gateways.get(file.ipfs_pin_hash);
            return res == null ? void 0 : res.data;
          })
        );
        if (airdropData) {
          return airdropData;
        }
        return [];
      } catch (error) {
        console.error(
          "Error while fetching contractIds from ipfs in useGetAirdropContractId: ",
          error
        );
        throw error;
      }
    }
  });
};
const FuelLogo = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 344 344",
      className: "PJLV PJLV-iiWunJk-css fuel_Logo w-[50px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "25", y: "37", width: "292", height: "284", fill: "black" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M22.8744 0C10.2181 0 0 10.218 0 22.8744V344H284.626C294.246 344 303.497 340.179 310.308 333.368L333.368 310.308C340.179 303.497 344 294.246 344 284.626V0H22.8744ZM224.608 44.231L112.718 156.121C109.956 158.882 106.182 160.447 102.27 160.447C96.5631 160.447 91.3157 157.134 88.8763 151.978L45.5194 60.3402C41.9756 52.8383 47.4525 44.231 55.7374 44.231H224.608ZM44.231 299.769V190.916C44.231 185.117 48.9257 180.422 54.7249 180.422H163.577L44.231 299.769ZM172.598 160.447H136.559L244.998 52.0097C249.968 47.0382 256.734 44.231 263.776 44.231H299.814L191.377 152.668C186.407 157.64 179.64 160.447 172.598 160.447Z",
            fill: "#00F58C"
          }
        )
      ]
    }
  );
};
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
export {
  ArrowRight as A,
  Badge as B,
  FuelLogo as F,
  Grid as G,
  useGetAirdropData as u
};
