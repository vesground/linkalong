// TODO: Handle relation between initial and new values
export const parseBySchema = ({ schema, initValues = {}, newValues = {} }) => {
  let mappedObj = {};

  debugger;

  for (const key in initValues) {
    const newKey = schema[key];

    if (typeof newKey == 'string') {
      mappedObj[newKey] = initValues[key];
    } else if (typeof newKey == 'function') {
      const keyValue = newKey(initValues[key], newValues[key]);
      mappedObj = { ...mappedObj, ...keyValue };
    };

    debugger;
  };

  debugger;

  return mappedObj;
};
