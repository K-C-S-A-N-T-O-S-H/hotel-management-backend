import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import HotelsRoute from '@/routes/hotels.route';
import validateEnv from '@utils/validateEnv';
import HotelTablesRoute from './routes/hotelTables.route';
import ItemControllerRoute from './routes/item.route';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new HotelsRoute(), new HotelTablesRoute(), new ItemControllerRoute()]);

app.listen();
