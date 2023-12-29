import CountItem from "../components/CountItem";
export default function MyCount() {
  const [total, setTotal] = useState();
  const getCount = (e) => {
    setTotal(e.total);
  }
  return (
    <div>
      <CountItem
        getCount={getCount}
      />
      <hr />
      <CountTotal
        total={total}
      />
    </div>
  );
}

