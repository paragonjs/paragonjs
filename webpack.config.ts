import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { cwd } from "node:process";
import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";
import nodeExternals from "webpack-node-externals";

const scssLoaders = [
    
    {
        loader: MiniCssExtractPlugin.loader,
    },
    //{
    //    loader: "style-loader",
    //},
    {
        loader: "css-loader",
        options: {
            importLoaders: 1,
        },
    },
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [autoprefixer, cssnanoPlugin({ preset: "default" })],
            },
        },
    },
    {
        loader: "sass-loader",
    },
];

const client = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "@paragonjs/core",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
        alias: {
            react: path.resolve(__dirname, "./node_modules/react"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
        },
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM",
        },
    },
};

const server = {
    context: cwd(),
    mode: "production",
    target: "node",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: "@paragonjs/core",
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: "ts-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: scssLoaders,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
        alias: {
            react: path.resolve(__dirname, "./node_modules/react"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
        },
        fallback: {
            buffer: false,
            stream: require.resolve("stream-browserify"),
        },
    },
    externals: [
        nodeExternals(),
        {
            // Don't bundle react or react-dom
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "React",
                root: "React",
            },
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "ReactDOM",
                root: "ReactDOM",
            },
        },
    ],
    plugins: [new MiniCssExtractPlugin()],
};

module.exports = [server];