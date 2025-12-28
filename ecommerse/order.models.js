import mongoose from 'mongoose';

const orderItemScema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    ordertItems: {
      type: [orderItemScema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: string,
      enum: ['PENDING', 'CANCELD', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { Timestamp: true }
);
export const Order = mongoose.model('Order', orderSchema);
