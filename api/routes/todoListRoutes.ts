/**
 * Internal dependenices
 */
import {
	listALL,
	create,
	read,
	update,
	remove
} from '../controllers/todoListController';

/**
 * Application routes
 */
export default app => {
	/**
	 * GLobal routes
	 */
	app.route('/tasks')
		.get(listALL)
		.post(create);

	/**
	 * Single item routes
	 */
	app.route('/tasks/:taskId')
		.get(read)
		.put(update)
		.delete(remove);
};
