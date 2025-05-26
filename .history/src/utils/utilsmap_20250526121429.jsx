export const loadMapplsSdk = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (window.mappls) return resolve();

    const script1 = document.createElement('script');
    script1.src = `https://apis.mappls.com/advancedmaps/v1/${apiKey}/map_load?v=1.5`;
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = `https://apis.mappls.com/advancedmaps/v1/${apiKey}/mappls.js?v=1.5`;
    script2.async = true;

    const link = document.createElement('link');
    link.href = 'https://apis.mappls.com/advancedmaps/v1/mappls.css';
    link.rel = 'stylesheet';

    document.head.appendChild(link);
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    script2.onload = () => {
      if (window.mappls) resolve();
      else reject('Mappls failed to load');
    };

    script2.onerror = () => reject('Error loading Mappls SDK');
  });
};
