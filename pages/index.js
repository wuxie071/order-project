import { useState } from "react";
import Head from 'next/head';

export default function OrderSystem() {
  const [view, setView] = useState("list"); // 视图状态：list, detail, progress, pay
  const [status, setStatus] = useState("待确认");

  // 模拟图2中的详细数据
  const orderData = {
    id: "DD20260510001",
    name: "夏凉被四件套",
    sku: "SP202605001",
    spec: "200x230cm 喜",
    category: "床上用品-被芯类",
    amount: 200,
    price: 25600.00,
    address: "浙江省杭州市西湖区文三路XXX号 XX旗舰店 (张三 138****8888)",
    tech: "面料：100%新疆长绒棉；填充：60%大豆纤维+40%聚酯纤维；工艺：水洗工艺、磨毛处理"
  };

  return (
    <div className="bg-[#F6F7F9] min-h-screen pb-20 font-sans text-[#333]">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>定制订单系统设计 1.0</title>
      </Head>

      {/* 01 订单列表页 */}
      {view === "list" && (
        <div className="max-w-md mx-auto">
          <div className="bg-white p-4 sticky top-0 z-10 border-b border-gray-100 flex justify-between items-center">
            <h1 className="text-lg font-bold text-center flex-1">定制订单</h1>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 border border-white hover:border-blue-400 transition-all cursor-pointer" onClick={() => setView("detail")}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-orange-500 bg-orange-50 px-2 py-0.5 rounded text-xs font-medium">{status}</span>
                <span className="text-[#FABC16] font-bold text-xl">¥25,600.00</span>
              </div>
              <h2 className="text-base font-bold mb-1">{orderData.name}</h2>
              <p className="text-gray-400 text-xs mb-4">{orderData.id} | 05-10 | {orderData.amount}套</p>
              <div className="flex justify-end">
                <button className="bg-[#1677FF] text-white px-6 py-1.5 rounded-full text-sm font-medium" onClick={(e) => { e.stopPropagation(); setView("pay"); }}>去支付</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 02 订单详情页 */}
      {view === "detail" && (
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <div className="p-4 border-b flex items-center">
            <button onClick={() => setView("list")} className="text-gray-400 mr-2 text-xl">〈</button>
            <h1 className="text-lg font-bold flex-1 text-center">订单详情</h1>
          </div>
          <div className="bg-orange-50 p-4 border-l-4 border-orange-400">
            <p className="text-orange-600 font-bold">待确认</p>
            <p className="text-orange-400 text-xs mt-1">请确认订单详情并完成支付</p>
          </div>
          <div className="p-4 space-y-6">
            <InfoSection title="基本信息" items={[["客户编号", "ZD2026001"], ["客户名称", "杭州总代"], ["直发方式", "到门店"]]} />
            <InfoSection title="产品信息" items={[["料号", orderData.sku], ["品名", orderData.name], ["规格", orderData.spec], ["数量", <span className="text-orange-500 font-bold">{orderData.amount}</span>]]} />
            <div>
              <p className="text-gray-400 text-xs mb-2 font-bold italic">工艺描述 (请仔细核对)</p>
              <div className="bg-orange-50/50 p-3 rounded-lg text-xs leading-relaxed text-orange-800">{orderData.tech}</div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex justify-between items-center max-w-md mx-auto shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <div><span className="text-xs text-gray-400">合计：</span><span className="text-lg font-bold">¥25,600.00</span></div>
            <button className="bg-[#1677FF] text-white px-8 py-2.5 rounded-lg font-bold" onClick={() => setView("pay")}>确认并支付</button>
          </div>
        </div>
      )}

      {/* 04 确认支付页 */}
      {view === "pay" && (
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <div className="p-4 border-b flex items-center">
            <button onClick={() => setView("detail")} className="text-gray-400 mr-2 text-xl">〈</button>
            <h1 className="text-lg font-bold flex-1 text-center">确认支付</h1>
          </div>
          <div className="p-4 text-center">
             <div className="mt-10 mb-8">
                <p className="text-gray-400 text-sm">支付金额</p>
                <p className="text-4xl font-bold text-gray-900 mt-2">¥ 25,600.00</p>
             </div>
             <div className="bg-gray-50 rounded-2xl p-6 text-left mb-10">
                <div className="flex justify-between mb-4"><span className="text-gray-400">订单编号</span><span className="text-sm">{orderData.id}</span></div>
                <div className="flex justify-between mb-4"><span className="text-gray-400">支付方式</span><span className="text-sm text-green-600 font-medium">微信支付</span></div>
             </div>
             <button className="w-full bg-[#1677FF] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-100" onClick={() => { setStatus("已支付"); setView("list"); }}>确认支付</button>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoSection({ title, items }) {
  return (
    <div>
      <p className="text-xs font-bold mb-3 flex items-center text-gray-800">
        <span className="w-1 h-3 bg-blue-500 mr-2 rounded-full"></span>{title}
      </p>
      <div className="space-y-3">
        {items.map(([label, val], i) => (
          <div key={i} className="flex justify-between text-xs items-center">
            <span className="text-gray-400">{label}</span>
            <span className="text-gray-800 text-right">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
