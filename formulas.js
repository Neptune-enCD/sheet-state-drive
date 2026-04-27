//paste into Cell A1
=TEXTJOIN("|", TRUE, BYCOL(A2:Z, LAMBDA(col, TEXTJOIN("|", TRUE, BYROW(col, LAMBDA(cell, IF(AND(MOD(ROW(cell), 2) = 1, NOT(ISBLANK(cell))), cell & ":" & ROUNDDOWN((((ROW(cell)-1)/2) + COLUMN(cell)-1), 0), "")))))))

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
