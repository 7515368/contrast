const path = require("path");
const webpack = require("webpack");
const ExtractTextPlagin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlagin("css/styles.css");

    return {
        entry: ["babel-polyfill", "./src/js/script.js"],
        output: {
            path: path.join(__dirname, "public"),
            filename: "js/" + "bundle.js",
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    sourceMap: true,
                                },
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                    }),
                },
                {
                    test: /\.(png|jpg|svg|webp)$/,
                    loader: "url-loader",
                },
            ],
        },
        plugins: [
            CSSExtract,
            new CopyWebpackPlugin([
                { from: "src/index.html", to: "index.html" },
                { from: "src/services.html", to: "services.html" },
                { from: "src/tailor.html", to: "tailor.html" },
                { from: "src/shoes.html", to: "shoes.html" },
                { from: "src/delivery.html", to: "delivery.html" },
                { from: "src/map.html", to: "map.html" },
                { from: "src/map2.html", to: "map2.html" },
                { from: "src/map-item.html", to: "map-item.html" },
                { from: "src/page404.html", to: "page404.html" },
                { from: "src/blog.html", to: "blog.html" },
                { from: "src/sales.html", to: "sales.html" },
                { from: "src/sales-slider.html", to: "sales-slider.html" },
                { from: "src/prices.html", to: "prices.html" },
                { from: "src/charity.html", to: "charity.html" },
                { from: "src/company-page.html", to: "company-page.html" },
                { from: "src/franchise.html", to: "franchise.html" },
                { from: "src/services-white.html", to: "services-white.html" },
                { from: "src/start-page.html", to: "start-page.html" },
                { from: "src/start-page-video.html", to: "start-page-video.html" },
                { from: "src/partners.html", to: "partners.html" },
                { from: "src/portfolio.html", to: "portfolio.html" },
                { from: "src/clean-box.html", to: "clean-box.html" },
                { from: "src/underconstruction.html", to: "underconstruction.html" },
                { from: "src/img", to: "img" },
                { from: "src/styles/fonts", to: "css/fonts" },
            ]),
            new HtmlWebpackPlugin({
                template: "src/index.html",
                hash: true,
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
            }),
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            port: 3000,
            historyApiFallback: true,
            /*uncomment below in case of access from another device of this network. (192.168.0.102:3000)*/
            // host: '192.168.0.102'
        },
    };
};
