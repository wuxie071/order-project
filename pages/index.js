import { useState } from "react";
import Head from 'next/head';

export default function DesignSystem() {
  return (
    <div className="bg-[#F0F2F5] min-h-screen p-10 font-sans text-[#333]">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>定制订单系统设计 1.0</title>
      </Head>

      {/* 整体容器：平铺展示四个页面 */}
      <div className="flex gap-8 overflow-x-auto pb-10">
        
        {/* 01 订单列表页 */}
        <PhoneShell title="01 订单列表页">
          <div className="bg-white sticky top-0 px-4 py-3 border-b flex justify-between items-center">
            <span className="text-gray-400 text-lg">〈</span>
            <h1 className="font-bold">定制订单</h1>
            <div className="flex gap-2">
              <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-[10px]">...</span>
              <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-[10px]">○</span>
            </div>
          </div>
          <div className="p-3 bg-[#F6F7F9] h-full">
            <div className="bg-white p-2 rounded flex items-center gap-2 mb-3 shadow-sm">
              <span className="text-gray-300">🔍</span>
              <input className="text-xs bg-transparent outline-none w-full" placeholder="搜索订单编号/产品名称" />
              <span className="text-blue-500 text-xs">搜索</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-3 px-1">
              <span className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">全部</span>
              <span>待确认</span>
              <span>已支付</span>
              <span>已发货</span>
              <span>已完成</span>
            </div>
            {/* 订单卡片 */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-3">
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2 items-center">
                  <span className="bg-orange-50 text-orange-500 text-[10px] px-1.5 py-0.5 rounded">待确认</span>
                  <span className="text-orange-300 text-[10px]">待确认，请尽快支付</span>
                </div>
                <span className="text-[#FABC16] font-bold">¥25,600.00</span>
              </div>
              <h3 className="font-bold text-sm">夏凉被四件套</h3>
              <p className="text-[10px] text-gray-400 mt-1">DD20260510001  |  05-10  |  200套</p>
              <div className="flex justify-end mt-3">
                <button className="bg-[#1677FF] text-white text-[10px] px-4 py-1 rounded-full">去支付</button>
              </div>
            </div>
          </div>
        </PhoneShell>

        {/* 02 订单详情页 */}
        <PhoneShell title="02 订单详情页">
          <div className="bg-white px-4 py-3 border-b flex justify-between items-center">
            <span className="text-gray-400 text-lg">〈</span>
            <h1 className="font-bold">订单详情</h1>
            <span className="w-5 h-5 bg-gray-100 rounded-full"></span>
          </div>
          <div className="bg-orange-50 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FABC16] rounded-full flex items-center justify-center text-white text-xl">🕒</div>
            <div>
              <p className="text-orange-600 font-bold text-sm">待确认</p>
              <p className="text-orange-400 text-[10px]">请确认订单并完成支付</p>
            </div>
          </div>
          <div className="p-4 space-y-5 overflow-y-auto h-[450px]">
            <Section title="基本信息" lines={[["客户编号","ZD2026001"],["客户名称","杭州总代"],["直发方式","到门店"]]} />
            <Section title="产品信息" lines={[["料号","SP202605001"],["品名","夏凉被四件套"],["规格","200x230cm"],["数量","200套"]]} />
            <Section title="价格信息" lines={[["定制价格","¥128.00/套"],["吊牌价格","¥298.00/套"]]} />
            <div className="pt-2 border-t">
               <p className="text-[#FABC16] text-[10px] font-bold mb-1">⚒ 工艺描述 (请仔细核对)</p>
               <div className="bg-orange-50/50 p-2 rounded text-[10px] text-orange-800 leading-relaxed">
                 面料：100%新疆长绒棉；填充：60%大豆纤维+40%聚酯纤维；工艺：水洗工艺、磨毛处理
               </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full p-3 bg-white border-t flex justify-between items-center">
            <span className="text-xs font-bold">合计：¥25,600.00</span>
            <button className="bg-[#1677FF] text-white text-xs px-6 py-2 rounded-lg font-bold">确认并支付</button>
          </div>
        </PhoneShell>

        {/* 03 订单进度页 */}
        <PhoneShell title="03 订单进度页">
          <div className="bg-white px-4 py-3 border-b flex justify-between items-center">
            <span className="text-gray-400 text-lg">〈</span>
            <h1 className="font-bold text-sm text-center flex-1">订单进度</h1>
          </div>
          <div className="p-4 bg-[#F6F7F9] h-full space-y-4 overflow-y-auto h-[550px]">
             <div className="bg-white p-4 rounded-xl flex items-center gap-3">
                <div className="bg-purple-100 p-3 rounded-xl text-xl">🚚</div>
                <div>
                   <p className="text-purple-600 font-bold text-sm">已发货</p>
                   <p className="text-purple-300 text-[10px]">物流派送中，预计3天内送达</p>
                </div>
             </div>
             <div className="bg-white p-4 rounded-xl">
                <p className="font-bold text-xs mb-4">订单进度</p>
                <div className="space-y-4">
                  <TimelineStep status="done" title="客户已支付" time="2026-05-10 14:30" />
                  <TimelineStep status="done" title="生产中" time="2026-05-11 09:20" />
                  <TimelineStep status="active" title="已发货" time="2026-05-15 10:30" />
                  <TimelineStep status="todo" title="待收货" time="预计 2026-05-18 前送达" last />
                </div>
             </div>
             <div className="bg-white p-4 rounded-xl">
                <p className="font-bold text-xs mb-3">物流信息</p>
                <div className="flex justify-between text-[10px] text-gray-500"><span className="text-gray-300">快递公司</span><span>顺丰速运</span></div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-2"><span className="text-gray-300">快递单号</span><span>SF123456789012</span></div>
             </div>
          </div>
          <div className="absolute bottom-0 w-full p-4 bg-white border-t">
             <button className="w-full bg-[#722ED1] text-white py-3 rounded-xl font-bold text-sm">确认收货</button>
          </div>
        </PhoneShell>

        {/* 04 确认支付页 */}
        <PhoneShell title="04 确认支付页">
          <div className="bg-white px-4 py-3 border-b flex justify-between items-center">
            <span className="text-gray-400 text-lg">〈</span>
            <h1 className="font-bold">确认支付</h1>
          </div>
          <div className="p-4 bg-[#F6F7F9] h-full">
             <div className="bg-white p-3 rounded-xl mb-4">
                <p className="text-[10px] font-bold mb-3">订单信息</p>
                <div className="flex gap-3">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center text-[8px] text-gray-400">产品图片</div>
                  <div>
                    <p className="font-bold text-xs">夏凉被四件套</p>
                    <p className="text-[10px] text-gray-400 mt-1">SP202605001</p>
                    <p className="text-[10px] text-gray-400">200x230cm 喜</p>
                  </div>
                </div>
             </div>
             <div className="bg-white p-3 rounded-xl mb-4">
                <p className="text-[10px] font-bold mb-3">费用明细</p>
                <div className="flex justify-between text-[10px] text-gray-400 mb-2"><span>定制费用</span><span className="text-gray-800 font-medium">¥25,600.00</span></div>
                <div className="flex justify-between text-[10px] text-gray-400 mb-2"><span>快递费</span><span className="text-gray-800 font-medium">¥0.00</span></div>
                <div className="flex justify-between items-center pt-2 border-t mt-1">
                   <span className="text-xs font-bold">应付合计</span>
                   <span className="text-orange-500 font-bold text-sm">¥25,600.00</span>
                </div>
             </div>
             <div className="bg-white p-3 rounded-xl mb-4">
                <p className="text-[10px] font-bold mb-3">收货地址</p>
                <div className="flex gap-2">
                   <span className="text-gray-300">📍</span>
                   <p className="text-[10px] leading-relaxed text-gray-500">浙江省杭州市西湖区文三路XXX号 XX旗舰店 (张三 138****8888)</p>
                </div>
             </div>
          </div>
          <div className="absolute bottom-0 w-full p-3 bg-white border-t flex justify-between items-center">
             <div className="text-[10px]"><span className="text-gray-400">实付：</span><span className="text-orange-500 font-bold text-lg">¥25,600.00</span></div>
             <button className="bg-[#1677FF] text-white text-xs px-8 py-2.5 rounded-lg font-bold">立即支付</button>
          </div>
        </PhoneShell>

      </div>
    </div>
  );
}

// 手机壳包装组件
function PhoneShell({ children, title }) {
  return (
    <div className="flex-shrink-0 w-[320px]">
      <p className="text-[#1677FF] font-bold mb-4">{title}</p>
      <div className="w-[320px] h-[640px] bg-white rounded-[40px] border-[8px] border-[#333] shadow-2xl relative overflow-hidden flex flex-col">
         {/* 顶部听筒 */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#333] rounded-b-2xl z-20"></div>
         {children}
      </div>
    </div>
  );
}

// 通用信息行
function Section({ title, lines }) {
  return (
    <div>
       <p className="text-[10px] font-bold text-gray-800 mb-3 border-l-2 border-blue-500 pl-2">{title}</p>
       <div className="space-y-2 px-1">
          {lines.map(([label, val], i) => (
            <div key={i} className="flex justify-between text-[10px]">
              <span className="text-gray-300">{label}</span>
              <span className="text-gray-600 font-medium">{val}</span>
            </div>
          ))}
       </div>
    </div>
  );
}

// 进度条组件
function TimelineStep({ status, title, time, last }) {
  return (
    <div className="flex gap-3">
       <div className="flex flex-col items-center">
          <div className={`w-3 h-3 rounded-full ${status === 'done' ? 'bg-green-500' : status === 'active' ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
          {!last && <div className="w-[1px] h-10 bg-gray-100"></div>}
       </div>
       <div className="pb-4">
          <p className={`text-[10px] font-bold ${status === 'done' ? 'text-green-500' : 'text-gray-800'}`}>{title}</p>
          <p className="text-gray-300 text-[8px] mt-1">{time}</p>
       </div>
    </div>
  );
}
