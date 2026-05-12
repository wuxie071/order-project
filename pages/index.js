import { useState } from "react";
import Head from 'next/head';

export default function OrderSystem() {
  const [view, setView] = useState("list"); // list, detail, progress, pay
  const [status, setStatus] = useState("待确认");

  // 模拟订单数据
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
                <span className="text-orange-500 bg-orange-50 px-2 py-0.5 rounded text-xs font-medium">待确认</span>
                <span className="text-[#FABC16] font-bold text-xl">¥25,600.00</span>
              </div>
              <h2 className="text-base font-bold mb-1">{orderData.name}</h2>
              <p className="text-gray-400 text-xs mb-4">{orderData.id} | 05-10 | {orderData.amount}套</p>
              <div className="flex justify-end">
                <button className="bg-[#1677FF] text-white px-6 py-1.5 rounded-full text-sm font-medium" onClick={(e) => { e.stopPropagation(); setView("pay"); }}>去支付</button>
              </div>
            </div>
            {/* 模拟其他卡片 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm opacity-60">
              <div className="flex justify-between items-start mb-2">
                <span className="text-blue-500 bg-blue-50 px-2 py-0.5 rounded text-xs">已支付</span>
                <span className="text-blue-600 font-bold text-xl">¥18,000.00</span>
              </div>
              <h2 className="text-base font-bold">空调被</h2>
            </div>
          </div>
        </div>
      )}

      {/* 02 订单详情页 */}
      {view === "detail" && (
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <div className="p-4 border-b flex items-center">
            <button onClick={() => setView("list")} className="text-gray-400 mr-2">〈</button>
            <h1 className="text-lg font-bold flex-1 text-center">订单详情</h1>
          </div>
          
          <div className="bg-orange-50 p-4 border-l-4 border-orange-400">
            <p className="text-orange-600 font-bold">待确认</p>
            <p className="text-orange-400 text-xs mt-1">请确认订单详情并完成支付</p>
          </div>

          <div className="p-4 space-y-6">
            <Section title="基本信息" items={[
              ["客户编号", "ZD2026001"],
              ["客户名称", "杭州总代"],
              ["直发方式", "到门店"]
            ]} />
            
            <Section title="产品信息" items={[
              ["料号", orderData.sku],
              ["品名", orderData.name],
              ["规格", orderData.spec],
              ["单位", "套"],
              ["大类", orderData.category],
              ["数量", <span className="text-orange-500 font-bold">{orderData.amount}</span>]
            ]} />

            <div>
              <p className="text-gray-400 text-xs mb-2">工艺描述 (请仔细核对)</p>
              <div className="bg-orange-50/50 p-3 rounded-lg text-xs leading-relaxed text-orange-800">
                {orderData.tech}
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex justify-between items-center max-w-md mx-auto">
            <div><span className="text-xs text-gray-400">合计：</span><span className="text-lg font-bold">¥25,600.00</span></div>
            <button className="bg-[#1677FF] text-white px-8 py-2.5 rounded-lg font-bold" onClick={() => setView("pay")}>确认并支付</button>
          </div>
        </div>
      )}

      {/* 03 订单进度页 */}
      {view === "progress" && (
        <div className="max-w-md mx-auto bg-[#F6F7F9] min-h-screen">
          <div className="bg-white p-4 border-b flex items-center">
             <button onClick={() => setView("detail")} className="text-gray-400 mr-2">〈</button>
             <h1 className="text-lg font-bold flex-1 text-center text-gray-800">订单进度</h1>
          </div>
          <div className="p-4">
             <div className="bg-white rounded-2xl p-4 mb-4">
                <div className="flex items-center text-purple-600 mb-2">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">🚚</div>
                  <div>
                    <p className="font-bold">已发货</p>
                    <p className="text-xs text-purple-400">物流配送中，预计3天内送达</p>
                  </div>
                </div>
             </div>
             <div className="bg-white rounded-2xl p-4">
                <p className="font-bold mb-4">订单进度</p>
                <Step status="done" title="客户已支付" time="2026-05-10 14:30" />
                <Step status="done" title="生产中" time="2026-05-11 09:20" />
                <Step status="active" title="已发货" time="2026-05-15 10:30" />
                <Step status="todo" title="待收货" time="预计 2026-05-18 前送达" isLast />
             </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-md mx-auto">
             <button className="w-full bg-[#722ED1] text-white py-3 rounded-xl font-bold" onClick={() => setView("list")}>确认收货</button>
          </div>
        </div>
      )}

      {/* 04 确认支付页 */}
      {view === "pay" && (
        <div className="max-w-md mx-auto bg-white min-h-screen">
          <div className="p-4 border-b flex items-center">
            <button onClick={() => setView("detail")} className="text-gray-400 mr-2">〈</button>
            <h1 className="text-lg font-bold flex-1 text-center">确认支付</h1>
          </div>
          <div className="p-4">
            <div className="bg-gray-50 rounded-2xl p-4 mb-6">
              <p className="text-xs text-gray-400 mb-2">订单信息</p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg mr-3 overflow-hidden">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-400 text-center px-1">夏凉被图</div>
                </div>
                <div>
                  <p className="font-bold text-sm">{orderData.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{orderData.spec}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm"><span className="text-gray-400">定制费用</span><span>¥25,600.00</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-400">快递费</span><span>¥0.00</span></div>
              <div className="flex justify-between items-center pt-2 border-t font-bold">
                <span>应付合计</span><span className="text-orange-500 text-xl font-bold">¥25,600.00</span>
              </div>
            </div>

            <div className="bg-[#1677FF] text-white rounded-2xl p-6 text-center shadow-xl shadow-blue-100 mt-10">
              <p className="text-sm opacity-80 mb-2">支付金额</p>
              <p className="text-3xl font-bold mb-6 text-white">¥25,600.00</p>
              <button className="bg-white text-[#1677FF] w-full py-3 rounded-xl font-bold" onClick={() => { setStatus("已支付"); setView("progress"); }}>立即支付</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 辅助组件：信息区块
function Section({ title, items }) {
  return (
    <div>
      <p className="text-xs font-bold mb-3 flex items-center">
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

// 辅助组件：步骤条
function Step({ status, title, time, isLast }) {
  const color = status === "done" ? "bg-green-500" : status === "active" ? "bg-purple-500" : "bg-gray-200";
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-3">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        {!isLast && <div className={`w-0.5 flex-1 ${status === 'done' ? 'bg-green-100' : 'bg-gray-50'}`}></div>}
      </div>
      <div className="pb-6 text-xs">
        <p className={`font-bold ${status === 'done' ? 'text-green-500' : 'text-gray-800'}`}>{title}</p>
        <p className="text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
}
