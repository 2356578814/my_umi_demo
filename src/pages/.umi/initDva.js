import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'cards', ...(require('d:/umi_js/src/models/cards.js').default) });
app.model({ namespace: 'register', ...(require('d:/umi_js/src/models/register.js').default) });
app.model({ namespace: 'weChat', ...(require('d:/umi_js/src/models/weChat.js').default) });
app.model({ namespace: 'zidongyanghao', ...(require('d:/umi_js/src/models/zidongyanghao.js').default) });
app.model({ namespace: 'b', ...(require('d:/umi_js/src/pages/a/models/b.js').default) });
