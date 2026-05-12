import { useState } from "react";

export default function OrderApp() {
  const [page, setPage] = useState("list");
  const [status, setStatus] = useState("pending"); 
  // pending / paid / producing / shipped

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      
      {/* 列表页 */}
      {page === "list" && (
        <div>
          <h1 className="text-xl font-bold mb-4">定制订单</h1>

          <div 
            className="bg-white p-4 rounded-xl shadow mb-3 cursor-pointer"
            onClick={() => setPage("detail")}
          >
            <div className="flex justify-between">
              <span className="text-orange-500">待确认</span>
              <span className="text-orange-500 font-bold">¥25,600</span>
            </div>
            <div className="mt-2">夏凉被四件套</div>

            {status === "pending" && (
              <button 
                className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
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
        <div>
          <button onClick={()=>setPage("list")}>返回</button>

          {/* 状态卡片 */}
          <div className="bg-orange-100 p-4 rounded-xl mt-3">
            {status === "pending" && "待确认"}
            {status === "paid" && "已支付"}
            {status === "producing" && "生产中"}
            {status === "shipped" && "已发货"}
          </div>

          {/* 进度条（动画） */}
          {status !== "pending" && (
            <div className="bg-white p-4 rounded-xl mt-3">
              <div className="text-sm mb-2">订单进度</div>
              <div className="flex justify-between text-xs">
                <span>已支付</span>
                <span>生产中</span>
                <span>已发货</span>
              </div>

              <div className="h-2 bg-gray-200 rounded mt-2">
                <div 
                  className={`h-2 bg-green-500 rounded transition-all duration-500`}
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

          {/* 物流信息 */}
          {status === "shipped" && (
            <div className="bg-white p-4 rounded-xl mt-3">
              <div className="font-bold">物流信息</div>
              <div className="text-sm mt-2">
                顺丰 SF123456789
              </div>
            </div>
          )}

          {/* 订单详情（始终可见） */}
          <div className="bg-white p-4 rounded-xl mt-3">
            <div>商品：夏凉被四件套</div>
            <div>数量：200</div>
            <div className="text-orange-500 font-bold mt-2">
              ¥25,600
            </div>
          </div>

          {/* 底部按钮 */}
          {status === "pending" && (
            <button 
              className="fixed bottom-4 left-4 right-4 bg-blue-500 text-white py-3 rounded-xl"
              onClick={()=>setPage("pay")}
            >
              确认支付
            </button>
          )}
        </div>
      )}

      {/* 支付页 */}
      {page === "pay" && (
        <div>
          <button onClick={()=>setPage("detail")}>返回</button>

          <div className="bg-white p-4 rounded-xl mt-3">
            <div>支付金额</div>
            <div className="text-orange-500 text-xl">¥25,600</div>
          </div>

          <button 
            className="fixed bottom-4 left-4 right-4 bg-blue-500 text-white py-3 rounded-xl"
            onClick={()=>{
              setStatus("paid");
              setPage("detail");
            }}
          >
            立即支付
          </button>
        </div>
      )}
    </div>
  );
}