
const HTTP = {
    fetch: async (resource) => {
      await fetch(`http://datadash.co/${resource}`);
    },
  };
  
  const DataProvider = (() => {
    const dpOptions = {
      firebase: Firebase,
      http: HTTP,
    };
    return dpOptions[process.env.SETTINGS.dp];
  })();
  
  const useHomeFeed = () => {
    const data = [];
  
    const loading = false;
  
    const paginate = async () => {
      // this here could be a few different types of endpoints
      // this is the entry name you want
      // "lectures" || "menus" || "catalog_items" || "items"
      await DataProvider.fetch(process.env.SETTINGS.home_feed_dp);
    };
  
    return {
      data,
      loading,
      paginate,
    };
  };
  