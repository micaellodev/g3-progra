
import User from '../models/Usuario.js';
import Order from '../models/Orden.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalIncome = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);

    res.status(200).json({
      totalOrders,
      totalUsers,
      totalIncome: totalIncome[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener estadísticas', error });
  }
};
