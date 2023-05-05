import {
  Grid,
  PaginationItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Divider from "@mui/material/Divider";

const TrendingCardGroup = ({ listTrending, loadingTrending, cutInitial }) => {
  /**
   *  Mục đích render từng state 4 phim trong 2 phim theo thứ tự. 
   * Cần có state để lưu 4 phim khi function xử lý xong và trả về 4 phim 
   * Khi function handleClick trả ra array sẽ được setCutlist set cho cutList danh sách 4 bộ phim
  */
  const [cutList, setCutList] = useState();
  // để set copiedList tạo logic cho function handleList
  const [copiedList, setcopiedList] = useState([]);
  /**
   * function khi click vào pagnation từ listTrending cut ra 4 movie để render
   * Logic: trong function
   * Mục tiêu mỗi lần click thì trả về 4 phim theo thứ tự từ list all movie
   * function trả về array 4 object chứa 4 film
   * splice trả ra array mới bỏ phần tại vị trí, remove bao nhieu phan tu
   * slice trả về array mới, bắt đầu ở vị trí và kết thúc ở trước của 4 [0,1,2,3]
   * khi copiedList # 0 và khác 4 chạy vào else cuối
   * 
   */ 
  function handleList() {
    let y;
    // ban đầu copiedList === 0 chạy vào điều kiện đầu
    if (copiedList.length === 0) {
      // set cho copiedList all list Trending
      setcopiedList([...listTrending]);
      // y sẽ bằng 4 movie đầu để trả ra rendering 
      y = [...listTrending].slice(0, 5);
      //copiedList.splice(0, 4);
    } else if (copiedList.length === 5) {
      setcopiedList([...listTrending]);
      y = copiedList.splice(0, 5);
    } else {
      /** y sẽ bằng array bắt đầu từ vị trí 4 và 4 phần tử
       * đồng thời copiedList thay đổi chỉ trả ra array đã rm 4 movie đó
        */ 
      y = copiedList.splice(5, 5);
    }
    return y;
  }
  const placeholder = [0, 1, 2, 3,4];
  const detailSkeleton = (
    <Stack spacing={1}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Stack>
  );
  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" my={3}>
          TRENDING
        </Typography>

        <PaginationItem type="next" onClick={() => setCutList(handleList())} />
      </Stack>
      <Divider />
      <Grid container direction="row" spacing={5} mt={2}>
        {/* conditional rendering khi loading = true trả về các ô trống
        khi false set ( lấy dữ liệu xong và đúng ) set đến cutlist, kiểm tra 
        cutList đúng hay không? Nếu đúng render CutList, nếu sai chuyển sang render CutInitial*/}
        <Grid
        container
        direction="row"
        spacing={2}
        mt={2}
        wrap="noWrap"
        width={"auto"}
        display={"flex"}
        overflow={"scroll"}
      >
        {loadingTrending
          ? placeholder.map((item) => (
              <Grid key={item.id} item xs={6} sm={4} md={3}>
                {detailSkeleton}
              </Grid>
            ))
          : cutList
          ? cutList.map((item) => (
              <Grid key={item.id} item xs={12} sm={12} md={12} display={"flex"} justifyContent={"space-between"} marginLeft={6}>
                <MovieCard item={item} /> 
              </Grid>
            ))
          : cutInitial?.map((item) => (
              <Grid key={item.id} item xs={12} sm={12} md={12} display={"flex"} justifyContent={"space-between"} marginLeft={6}>
                <MovieCard item={item} />
              </Grid>
            ))}
        </Grid>    
      </Grid>
    </>
  );
};

export default TrendingCardGroup;
/**
 * Phân Tích:
 * tính năng:
 * -khi click vào PagnationItem thì lọc 4 movie trending render lên
 * - Khi click vào movie Item chuyển vào trang Detail Movie
 * Dữ Liệu có sẵn được truyền vào TrendingGroup là:
 * + List all movie trending
 * + state Loading( 2 trạng thái true or false)
 * + cutInitial ( list 4 phim cuối  được cut ra từ 20 list all phim )
 */
