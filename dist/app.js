"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const GlobalError_1 = require("./globalError/GlobalError");
const Category_route_1 = __importDefault(require("./module/Category/Category.route"));
const Foods_route_1 = __importDefault(require("./module/Foods/Foods.route"));
const Blog_route_1 = __importDefault(require("./module/Blog/Blog.route"));
const Order_Route_1 = __importDefault(require("./module/Order/Order.Route"));
const User_Routes_1 = __importDefault(require("./module/User/User.Routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/v1/category', Category_route_1.default);
app.use('/api/v1/foods', Foods_route_1.default);
app.use('/api/v1/blogs', Blog_route_1.default);
app.use('/api/v1/order', Order_Route_1.default);
app.use('/api/v1/user', User_Routes_1.default);
app.use(GlobalError_1.GlobalError);
app.use((req, res) => {
    res.status(400).send({
        message: 'route not found'
    });
});
exports.default = app;
