import { useState } from "react";
import Head from 'next/head';

export default function OrderApp() {
  const [page, setPage] = useState("list");
  const [status, setStatus] = useState("pending"); 

  return (
    <div className="bg-gray-100 min-h-screen p-4 font-sans">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      
      {/* 列表页 */}
      {page === "list" && (
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-bold mb-4 text-gray-800">定制订单</h1>

          <div 
            className="bg-white p-4 rounded-xl shadow-sm mb-3 cursor-pointer border border-gray-100"
            onClick={() => setPage("detail")}
          >
            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-medium">待确认</span>
              <span className="text-orange-500 font-bold text-lg">¥25,600</span>
            </div>
            <div className="mt-2 text-gray-700">夏凉被四件套</div>

            {status === "pending" && (
              <button 
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-colors"
                onClick={(e)=>{
                  e.stopPropagation();
                  setPage("pay");
                }}
              >
                去支付
              </button>
            )}
          </div>
        </div>
      )}

      {/* 详情+进度融合页 */}
      {page === "detail" && (
        <div className="max-w-md mx-auto">
          <button 
            className="text-blue-500 mb-4 flex items-center" 
            onClick={()=>setPage("list")}
          >
            ← 返回列表
          </button>

          {/* 状态卡片 */}
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 mb-4">
            <span className="text-orange-600 font-bold text-lg">
              {status === "pending" && "等待付款"}
              {status === "paid" && "已支付，待生产"}
              {status === "producing" && "工厂生产中"}
              {status === "shipped" && "订单已发货"}
            </span>
          </div>

          {/* 进度条 */}
          {status !== "pending" && (
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
              <div className="text-sm font-bold text-gray-500 mb-3">订单进度</div>
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span className={status !== "pending" ? "text-green-500 font-bold" : ""}>已支付</span>
                <span className={(status === "producing" || status === "shipped") ? "text-green-500 font-bold" : ""}>生产中</span>
                <span className={status === "shipped" ? "text-green-500 font-bold" : ""}>已发货</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-700 ease-in-out"
                  style={{
                    width:
                      status === "paid" ? "33%" :
                      status === "producing" ? "66%" :
                      status === "shipped" ? "100%" : "0%"
                  }}
                />
              </div>
            </div>
          )}

          {/* 详情内容 */}
          <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>商品名称</span>
              <span className="text-gray-900">夏凉被四件套</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>定制数量</span>
              <span className="text-gray-900">200 套</span>
            </div>
            <div className="pt-3 border-t border-gray-50 flex justify-between items-center">
              <span className="font-bold text-gray-800">实付款</span>
              <span className="text-orange-500 font-bold text-xl">¥25,600</span>
            </div>
          </div>

          {status === "pending" && (
            <button 
              className="mt-6 w-full bg-blue-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200"
              onClick={()=>setPage("pay")}
            >
              立即支付
            </button>
          )}
        </div>
      )}

      {/* 支付确认页 */}
      {page === "pay" && (
        <div className="max-w-md mx-auto text-center pt-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-gray-500 mb-2">支付金额</div>
            <div className="text-4xl font-bold text-gray-900 mb-8">¥ 25,600.00</div>
            
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-transform active:scale-95"
              onClick={()=>{
                setStatus("paid");
                setPage("detail");
              }}
            >
              确认指纹支付
            </button>
            <button 
              className="mt-4 text-gray-400 text-sm"
              onClick={()=>setPage("list")}
            >
              取消支付
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
