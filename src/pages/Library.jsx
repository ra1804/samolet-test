import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../api";
import { Card, Spin } from "antd";

export default function Library() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const loadData = async () => {
    setLoading(true);
    const result = await getData();
    setData(result.find((item) => item.order === +id));
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
        <div className="site-card-border-less-wrapper">
          <Card title={data.formname} bordered={false} style={{ width: 1000 }}>
            <p>Регион: {data.territory}</p>
            <p>Наименование: {data.fullname}</p>
            <p>Адрес: {data.address}</p>
          </Card>
        </div>
      )}
    </div>
  );
}
