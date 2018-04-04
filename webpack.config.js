const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:[
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'],
  externals:{
    jquery:'jQuery',
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output:{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    alias:{
      Main:path.resolve(__dirname,'./app/components/Main.js'),
      BhashaMain:path.resolve(__dirname,'./app/components/BhashaMain/BhashaMain.js'),
      PickWords:path.resolve(__dirname,'./app/components/PickWords/PickWords.js'),
      Statement:path.resolve(__dirname,'./app/components/Statement/Statement.js'),
      AnswerGrid:path.resolve(__dirname,'./app/components/AnswerGrid/AnswerGrid.js'),
      Answer:path.resolve(__dirname,'./app/components/Answer/Answer.js'),
      OptionsGrid:path.resolve(__dirname,'./app/components/OptionsGrid/OptionsGrid.js'),
      CorrectOrIncorrect:path.resolve(__dirname,'./app/components/CorrectOrIncorrect/CorrectOrIncorrect.js'),
      Option:path.resolve(__dirname,'./app/components/Option/Option.js'),
      applicationStyles:path.resolve(__dirname,'./app/styles/app.scss')
    },
    extensions:[' ', '.js', '.jsx', '.css', '.scss']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['es2015', 'react', 'stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]

  }
};
