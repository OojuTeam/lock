// @ts-ignore
const get = () => import(/* webpackChunkName: "kaikas" */ 'import-caver-js-1.4.1-here'); // v^1.4.1

import LockConnector from '../src/connector';

export default class Connector extends LockConnector {
  async connect() {
    let provider;
    try {
      console.log('enabling Kaikas...');
      const KaikasLoaded = (await get());
      window.klaytn.enable();
      const kaikas = klaytn;
      const caver = new Caver(kaikas);
      provider = caver._provider;
    } catch (e) {
      console.error(e);
    }
    provider.connectorName = 'kaikas';
    return provider;
  }
}
