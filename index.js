// Tomorrow Theme

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = '#4d4d4c';
      action.config.backgroundColor = '#ffffff';
      action.config.cursorColor = '#d6d6d6';
      action.config.colors = [
        "#ffffff",
        "#c82829",
        "#718c00",
        "#eab700",
        "#4271ae",
        "#a03e51",
        "#3e999f",
        "#efefef",
        "#8e908c",
        "#c82829",
        "#718c00",
        "#eab700",
        "#4271ae",
        "#a03e51",
        "#3e999f",
        "#ffffff",
        "#4d4d4c"
      ];
      action.config.css = '.title_1i8co95 { color: #4d4d4c !important }'
  }
  next(action)
}

