import { lazy, Suspense } from "react";
import NavigationBar from "../layout/NavigationBar";
import SinContenido from "../layout/SinContenido";
import PaginationComponent from "../layout/PaginationComponent";
import Footer from "../layout/Footer";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useCallback } from "react";
import { initializeHoras } from "../../reducers/horasReducer";

const HorasTable = lazy(() => import("../layout/HorasTable"));

const LibroPage = () => {
  const horas = useSelector((state) => state.horas);

  const [searchParams, setSearchParams] = useSearchParams();

  const limit = searchParams.get("limit") || 15;
  const page = searchParams.get("page") || 1;

  const handlePageChange = useCallback(
    (newPage) => {
      setSearchParams({ limit, page: newPage });
    },
    [setSearchParams, limit]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeHoras(page));
  }, [dispatch, page]);

  if (!horas.content) return <div>Cargando...</div>;

  return (
    <div className="libro-page">
      <NavigationBar />
      {horas.content.length === 0 ? (
        <SinContenido />
      ) : (
        <>
          <Suspense fallback={<div>...Cargando</div>}>
            <HorasTable horas={horas.content} />
          </Suspense>
          <PaginationComponent
            handlePageChange={handlePageChange}
            totalPages={horas.totalPages}
            currentPage={page}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default LibroPage;
