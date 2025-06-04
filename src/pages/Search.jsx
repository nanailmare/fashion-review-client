
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQuery().get("query");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`/api/search?query=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then(setResults)
        .catch(console.error);
    }
  }, [query]);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">"{query}" 검색 결과</h2>
      <div className="grid grid-cols-2 gap-4">
        {results.map((item) => (
          <div key={item.id} className="border rounded-lg p-2 space-y-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover"
            />
            <div>
              <p className="font-medium text-sm truncate">{item.title}</p>
              <p className="text-xs text-gray-500">
                💰 {item.price}원 ({item.discountRate}% 할인)
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-xs underline"
              >
                판매 사이트 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
