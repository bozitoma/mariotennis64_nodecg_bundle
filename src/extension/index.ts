import NodeCG from '@nodecg/types';

module.exports = (nodecg: NodeCG.ServerAPI) => {
  const alert = () => {
    console.log('extensionは動いています');
  };

  nodecg.listenFor('alert', alert);
};
