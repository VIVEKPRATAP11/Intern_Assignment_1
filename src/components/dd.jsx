import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Leaderboard = () => {
  const [slippage, setSlippage] = useState("0%");
  const [sortField, setSortField] = useState("rank");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [data, setData] = useState([
    {
      rank: 1,
      name: "Selling with re entry",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentage: 0.65,
      price: "-",
    },
    {
      rank: 2,
      name: "strategy_name",
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentage: 0.64,
      price: 500,
    },
    {
      rank: 3,
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentage: 0.64,
      price: "-",
    },
    {
      rank: 4,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: "-",
    },
    {
      rank: 5,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: "-",
    },
    {
      rank: 6,
      name: "Based on premium wit",
      calmarRatio: 3.01,
      overallProfit: 135980,
      avgDailyProfit: 185.77,
      winPercentage: 0.49,
      price: "-",
    },
    {
      rank: 7,
      name: "strategy_name",
      calmarRatio: 2.76,
      overallProfit: 267867.5,
      avgDailyProfit: 218.49,
      winPercentage: 0.6,
      price: "-",
    },
    {
      rank: 8,
      name: "Wait and trade_Save",
      calmarRatio: 3.62,
      overallProfit: 178252.5,
      avgDailyProfit: 161.9,
      winPercentage: 0.63,
      price: "-",
    },
    {
      rank: 9,
      name: "iron condor",
      calmarRatio: 3.44,
      overallProfit: 176420,
      avgDailyProfit: 137.51,
      winPercentage: 0.65,
      price: "-",
    },
    {
      rank: 10,
      name: "strategy_name",
      calmarRatio: 3.04,
      overallProfit: 244555,
      avgDailyProfit: 198.66,
      winPercentage: 0.62,
      price: "-",
    },

  ]);

  const calmarSymbol = "📈";

  const handleDelete = (rank) => {
    const updatedData = data.filter((item) => item.rank !== rank);
    const reRankedData = updatedData.map((item, index) => ({
      ...item,
      rank: index + 1,
    }));
    setData(reRankedData);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <motion.button
          key={i}
          className={`mx-1 px-3 py-1 rounded-full ${
            currentPage === i
              ? "bg-indigo-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => handlePageChange(i)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {i}
        </motion.button>
      );
    }

    return pageNumbers;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-4/5">
        <h1 className="text-4xl font-bold mb-6 text-center">LeaderBoards</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl text-indigo-500">Basic Backtest</h2>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="mr-2">Slippage</span>
            <select
              className="p-2 rounded bg-gray-800 border border-gray-700"
              value={slippage}
              onChange={(e) => setSlippage(e.target.value)}
            >
              <option value="0%">0%</option>
              <option value="0.5%">0.5%</option>
              <option value="1%">1%</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-end mb-6">
          <span className="mr-2">Items per page</span>
          <select
            className="p-2 rounded bg-gray-800 border border-gray-700"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-9 gap-4 text-indigo-500 font-semibold">
            <div className="cursor-pointer" onClick={() => handleSort("rank")}>
              Rank
              {sortField === "rank" && (
                <span
                  className={`ml-1 ${
                    sortOrder === "asc"
                      ? "inline-block rotate-180"
                      : "inline-block"
                  }`}
                >
                  &#9660;
                </span>
              )}
            </div>
            <div className="cursor-pointer" onClick={() => handleSort("name")}>
              Name
              {sortField === "name" && (
                <span
                  className={`ml-1 ${
                    sortOrder === "asc"
                      ? "inline-block rotate-180"
                      : "inline-block"
                  }`}
                >
                  &#9660;
                </span>
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSort("calmarRatio")}
            >
              Calmar Ratio
              {sortField === "calmarRatio" && (
                <span
                  className={`ml-1 ${
                    sortOrder === "asc"
                      ? "inline-block rotate-180"
                      : "inline-block"
                  }`}
                >
                  &#9660;
                </span>
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSort("overallProfit")}
            >
              Overall Profit
              {sortField === "overallProfit" && (
                <span
                  className={`ml-1 ${
                    sortOrder === "asc"
                      ? "inline-block rotate-180"
                      : "inline-block"
                  }`}
                >
                  &#9660;
                </span>
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSort("avgDailyProfit")}
            >
              Avg. Daily Profit
              {sortField === "avgDailyProfit" && (
                <span
                  className={`ml-1 ${
                    sortOrder === "asc"
                      ? "inline-block rotate-180"
                      : "inline-block"
                  }`}
                >
                  &#9660;
                </span>
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleSort("winPercentage")}
            >
              Win % (Day)
              {sortField === "winPercentage" && (
                <span
                  className={`ml-1 ${
                    sortOrder === "asc"
                      ? "inline-block rotate-180"
                      : "inline-block"
                  }`}
                >
                  &#9660;
                </span>
              )}
            </div>
            <div>Price (Rs)</div>
            <div>Action</div>
            <div>Delete</div>
          </div>
          <AnimatePresence>
            {currentItems.map((item) => (
              <motion.div
                key={item.rank}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-9 gap-4 mt-2 p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              >
                <div>{item.rank}</div>
                <div>{item.name}</div>
                <div>
                  {calmarSymbol} {item.calmarRatio}
                </div>
                <div>{item.overallProfit.toFixed(2)}</div>
                <div>{item.avgDailyProfit.toFixed(2)}</div>
                <div>{item.winPercentage}</div>
                <div>{item.price}</div>
                <div>
                  {item.price === "-" ? (
                    <button className="bg-indigo-500 px-3 py-1 rounded text-white">
                      View
                    </button>
                  ) : (
                    <button className="bg-green-500 px-3 py-1 rounded text-white">
                      Buy
                    </button>
                  )}
                </div>
                <div>
                  <button
                    className="bg-red-500 px-3 py-1 rounded text-white"
                    onClick={() => handleDelete(item.rank)}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-6">{renderPageNumbers()}</div>
      </div>
    </div>
  );
};

export default Leaderboard;
