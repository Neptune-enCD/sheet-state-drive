//paste into Cell A1
=TEXTJOIN("|", TRUE, MAP(A2:Z, LAMBDA(cell, 
  LET(
    r, ROW(cell),
    c, COLUMN(cell),
    val, cell,
    is_data_row, MOD(r, 2) = 1,
    IF(AND(is_data_row, NOT(ISBLANK(val))), 
      val & ":" & LET(
        grid_r, (r - 1)/ 2,
        grid_c, c,
        w, grid_r + grid_c - 2,
        t, (w * (w + 1)) / 2,
        id, t + IF(MOD(w, 2) = 0, grid_r, grid_c),
        id
      ), 
    "")
  )
)))


//paste into cell B1
=MATCH(TRUE, MAP(SEQUENCE(100, 1, 1), LAMBDA(n, LET(
  w, CEILING((SQRT(8*n+1)-1)/2)-1,
  t, (w*w+w)/2,
  y, n-t,
  x, w-y+2,
  r_raw, IF(MOD(w,2)=0, y, x),
  c_raw, IF(MOD(w,2)=0, x, y),
  r, MAX(1, r_raw),
  c, MAX(1, c_raw),
  ISBLANK(OFFSET(A2, (r*2)-2, c-1))
))), 0)

//paste into cell C1
=MATCH(TRUE, MAP(SEQUENCE(10000, 1, 101), LAMBDA(n, LET(
  w, CEILING((SQRT(8*n+1)-1)/2)-1,
  t, (w*w+w)/2,
  y, n-t,
  x, w-y+2,
  r_raw, IF(MOD(w,2)=0, y, x),
  c_raw, IF(MOD(w,2)=0, x, y),
  r, MAX(1, r_raw),
  c, MAX(1, c_raw),
  ISBLANK(OFFSET(A2, (r*2)-2, c-1))
))), 0) + 100
