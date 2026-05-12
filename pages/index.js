import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, MoreHorizontal, CircleDot, Search, SlidersHorizontal, RefreshCw, Copy } from 'lucide-react';

// --- 子组件：订单列表页 ---
const OrderList = ({ onDetail }) => (
  <div className="bg-[#F5F7FA] min-h-screen pb-20">
    <div className="bg-white p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between mb-4">
        <ChevronLeft size={24} />
        <h1 className="text-lg font-bold">定制订单</h1>
        <div className="flex gap-2">
          <MoreHorizontal size={20} />
          <CircleDot size={20} />
        </div>
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm" placeholder="搜索订单编号 / 产品名称" />
      </div>
      <div className="flex justify-between text-sm text-gray-500 px-2">
        <span className="text-primary font-bold border-b-2 border-primary pb-1">全部</span>
        <span className="relative">待确认 <span className="absolute -top-2 -right-3 bg-error text-white text-[10px] px-1 rounded-full">3</span></span>
        <span>已支付</span>
        <span>已发货</span>
        <span>已完成</span>
      </div>
    </div>

    <div className="p-4 space-y-4">
      {[
        { title: '夏凉被四件套', id: 'DD20260510001', price: '25,600.00', status: '待确认', time: '05-10', count: '200套', color: 'text-warning' },
        { title: '空调被', id: 'DD20260508001', price: '18,000.00', status: '已支付, 生产中', time: '05-08', count: '150套', color: 'text-primary' },
      ].map((order, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-sm" onClick={onDetail}>
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className={`bg-orange-50 ${order.color} text-[10px] px-2 py-0.5 rounded`}>{order.status.split(',')[0]}</span>
              <span className="text-warning text-xs">● 待确认, 请尽快支付</span>
            </div>
            <span className="text-lg font-bold text-warning">¥{order.price}</span>
          </div>
          <h3 className="font-bold mb-1">{order.title}</h3>
          <div className="text-gray-400 text-xs flex justify-between">
            <span>{order.id}  |  {order.time}  |  {order.count}</span>
            <button className="bg-primary text-white px-4 py-1.5 rounded-full text-xs">去支付</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 子组件：订单详情页 ---
const OrderDetail = ({ onNext, onBack }) => (
  <div className="bg-[#F5F7FA] min-h-screen pb-24">
    <div className="bg-white p-4 flex items-center justify-between sticky top-0">
      <ChevronLeft size={24} onClick={onBack} />
      <h1 className="text-lg font-bold">订单详情</h1>
      <MoreHorizontal size={24} />
    </div>
    
    <div className="bg-orange-50 p-4 m-4 rounded-xl">
      <div className="flex items-center gap-2 text-warning font-bold">
        <div className="w-5 h-5 bg-warning rounded-full flex items-center justify-center text-white text-[10px]">!</div>
        待确认
      </div>
      <p className="text-warning text-xs mt-1">请确认订单并完成支付</p>
    </div>

    <section className="bg-white m-4 p-4 rounded-xl space-y-3">
      <h2 className="font-bold border-l-4 border-primary pl-2 text-sm">基本信息</h2>
      <div className="grid grid-cols-2 text-xs gap-y-2">
        <span className="text-gray-400">客户编号</span><span className="text-right">ZD2026001</span>
        <span className="text-gray-400">客户名称</span><span className="text-right">杭州总代</span>
        <span className="text-gray-400">直发方式</span><span className="text-right">到门店</span>
      </div>
    </section>

    <section className="bg-white m-4 p-4 rounded-xl space-y-3">
      <h2 className="font-bold border-l-4 border-primary pl-2 text-sm">产品信息</h2>
      <div className="grid grid-cols-2 text-xs gap-y-2">
        <span className="text-gray-400">料号</span><span className="text-right">SP202605001</span>
        <span className="text-gray-400">品名</span><span className="text-right font-bold">夏凉被四件套</span>
        <span className="text-gray-400">规格</span><span className="text-right">200x230cm</span>
        <span className="text-gray-400">数量</span><span className="text-right text-warning font-bold">200</span>
      </div>
    </section>

    <div className="fixed bottom-0 w-full bg-white p-4 flex justify-between items-center border-t">
      <span className="text-warning font-bold">合计: ¥25,600.00</span>
      <button className="bg-primary text-white px-8 py-2 rounded-lg font-bold" onClick={onNext}>确认并支付</button>
    </div>
  </div>
);

// --- 子组件：确认支付页 ---
const PaymentPage = ({ onNext, onBack }) => (
  <div className="bg-[#F5F7FA] min-h-screen">
    <div className="bg-white p-4 flex items-center justify-between">
      <ChevronLeft size={24} onClick={onBack} />
      <h1 className="text-lg font-bold">确认支付</h1>
      <MoreHorizontal size={24} />
    </div>

    <div className="p-4 space-y-4">
      <div className="bg-white p-4 rounded-xl flex gap-4">
        <div className="w-20 h-20 bg-gray-100 rounded-lg"></div>
        <div>
          <h3 className="font-bold">夏凉被四件套</h3>
          <p className="text-gray-400 text-xs mt-1">SP202605001</p>
          <p className="text-gray-400 text-xs">200x230cm  套</p>
          <div className="flex justify-between mt-2">
            <span className="text-xs">数量 200套</span>
            <span className="text-xs">单价 ¥128.00/套</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl space-y-3 text-sm">
        <div className="flex justify-between"><span>定制费用</span><span>¥25,600.00</span></div>
        <div className="flex justify-between"><span>快递费</span><span>¥0.00</span></div>
        <div className="flex justify-between font-bold border-t pt-3">
          <span>应付合计</span><span className="text-warning text-lg">¥25,600.00</span>
        </div>
      </div>
      
      <button className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-8" onClick={onNext}>立即支付</button>
    </div>
  </div>
);

// --- 子组件：订单进度页 ---
const ProgressPage = ({ onBack }) => (
  <div className="bg-[#F5F7FA] min-h-screen">
    <div className="bg-white p-4 flex items-center justify-between">
      <ChevronLeft size={24} onClick={onBack} />
      <h1 className="text-lg font-bold">订单进度</h1>
      <MoreHorizontal size={24} />
    </div>

    <div className="p-4 space-y-4">
      <div className="bg-purple-50 p-4 rounded-xl flex items-center gap-4">
        <div className="bg-purple-500 p-2 rounded-lg text-white">🚚</div>
        <div>
          <h3 className="text-purple-600 font-bold">已发货</h3>
          <p className="text-purple-400 text-xs">物流配送中, 预计3天内送达</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl relative">
        <div className="space-y-8 relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gray-100"></div>
          {[
            { status: '客户已支付', time: '2026-05-10 14:30', active: true },
            { status: '生产中', time: '2026-05-11 09:20', active: true },
            { status: '已发货', time: '2026-05-15 10:30', active: true },
            { status: '待收货', time: '预计 2026-05-18 前送达', active: false },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start relative z-10">
              <div className={`w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${step.active ? 'bg-success' : 'bg-gray-200'}`}>
                {step.active && <span className="text-white text-[10px]">✓</span>}
              </div>
              <div>
                <p className={`text-sm font-bold ${step.active ? 'text-black' : 'text-gray-300'}`}>{step.status}</p>
                <p className="text-xs text-gray-400 mt-1">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className="w-full bg-primary text-white py-3 rounded-xl font-bold">确认收货</button>
    </div>
  </div>
);

// --- 主组件 ---
export default function OrderApp() {
  const [page, setPage] = useState('list');

  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="max-w-md mx-auto shadow-2xl min-h-screen overflow-hidden bg-gray-100">
      <Head><title>定制订单系统</title></Head>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.2 }}
        >
          {page === 'list' && <OrderList onDetail={() => setPage('detail')} />}
          {page === 'detail' && <OrderDetail onBack={() => setPage('list')} onNext={() => setPage('pay')} />}
          {page === 'pay' && <PaymentPage onBack={() => setPage('detail')} onNext={() => setPage('progress')} />}
          {page === 'progress' && <ProgressPage onBack={() => setPage('pay')} />}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-0 max-w-md w-full bg-white border-t flex justify-around py-3 text-[10px] text-gray-400">
        <div className="flex flex-col items-center gap-1 text-primary"><div className="w-5 h-5 bg-primary/10 rounded"></div>首页</div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-gray-100 rounded"></div>订单</div>
        <div className="flex flex-col items-center gap-1"><div className="w-5 h-5 bg-gray-100 rounded"></div>我的</div>
      </div>
    </div>
  );
}
