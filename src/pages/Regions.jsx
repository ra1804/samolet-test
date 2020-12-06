import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Table, Spin, Menu } from "antd";
import { getData } from "../api";

export default function Regions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
  });

  const columns = [
    {
      title: "№ п/п",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Регион",
      dataIndex: "territory",
      key: "territory",
      render: (region, item) => <Link to={`/${item.order}`}>{region}</Link>,
    },
    {
      title: "Колл-во библиотек",
      key: "libraries",
      dataIndex: "libraries",
    },
  ];

  const loadData = async () => {
    setLoading(true);
    const result = await getData();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="site-layout-content">
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          onChange={(e) => setPagination(e)}
          rowKey="order"
        />
      )}
    </div>
  );
}
