var mapset= new Array(3);

mapset[0] = [[
    "x                  x",
    "x                  x",
    "x   xx          o  x",
    "x                  x",
    "x                  x",
    "x      o       x   x",
    "x         !    x   x",
    "x           xxxx   x",
    "x   !              x",
    "x                  x"],[

    "xo                 x",
    "x   xxxx           x",
    "x      x        o  x",
    "x         x        x",
    "x     xx xx        x",
    "x      o       x   x",
    "x              x   x",
    "x           x      x",
    "x   !              x",
    "x                  x"],[

    "xo                 x",
    "x                  x",
    "x   xxxx        o  x",
    "x                  x",
    "x                  x",
    "x      o       x   x",
    "x xxxxxx  xxx  xxxxx",
    "x                  x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x   x           o  x",
    "x      xxx         x",
    "x                  x",
    "x      o       x   x",
    "x                  x",
    "x           xx     x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x    x     !       x",
    "x     xx!       o  x",
    "x      xx          x",
    "x xxx    x         x",
    "x      o           x",
    "x            x   xxx",
    "x             xxx  x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x     x         o  x",
    "x         !        x",
    "x                  x",
    "x      o           x",
    "x        xxx       x",
    "x       xx         x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x   xxxx        o  x",
    "x    x             x",
    "x      x           x",
    "x      oxx     x   x",
    "x         x        x",
    "x              x   x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x   xxxx        o  x",
    "x                  x",
    "x                  x",
    "x  x   o       xxxxx",
    "x              xoo x",
    "x           xx     x",
    "x            !     x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x   xxxxxxxxxxxxooox",
    "x          x       x",
    "x          x       x",
    "x      o      x    x",
    "x                  x",
    "x           x      x",
    "x   !              x",
    "x                  x"],[

    "xoo              oox",
    "x                  x",
    "x   x           o  x",
    "x                  x",
    "x                  x",
    "x      o       x   x",
    "x !       !!     ! x",
    "x           xxxx   x",
    "x                  x",
    "x                  x"]]


mapset[1] = [[
    "x                  x",
    "x                  x",
    "x   xx         o   x",
    "x    !             x",
    "x     x xx         x",
    "x     x o       xxxx",
    "x   x      xxx !   x",
    "x           x      x",
    "x   !              x",
    "x                  x"],[

    "xo                ox",
    "x      x           x",
    "x      x  xx!   o  x",
    "x      x  x        x",
    "x     xx  x        x",
    "x      o !x  x x   x",
    "x            x x   x",
    "x          xxx     x",
    "x   !          !   x",
    "x                  x"],[

    "xo                 x",
    "x     xx           x",
    "x   ! xx        o  x",
    "x         x !      x",
    "x    xxxxxx        x",
    "x      o  x   !x   x",
    "x         xxx  xx  x",
    "x                  x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x    !     xxxx    x",
    "x   x        !x o  x",
    "x      xxx    xo   x",
    "x     o    !       x",
    "x                  x",
    "x                  x",
    "x           x      x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x          !       x",
    "x       !       o  x",
    "x                  x",
    "x    !             x",
    "x      o       x   x",
    "x              x   x",
    "x           xxxx   x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x        !   o     x",
    "x               o  x",
    "x   ! xx  x  x     x",
    "x                  x",
    "x      o    !      x",
    "x                  x",
    "x     xxx      !   x",
    "x   !              x",
    "x                  x"],[

    "x      o           x",
    "x o    !     o     x",
    "x   x! x  o     o  x",
    "x                  x",
    "x     !            x",
    "x      o       x   x",
    "x              x   x",
    "x           !      x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x        !         x",
    "x   xxxx        o  x",
    "x   !              x",
    "x                  x",
    "x      o       xxxxx",
    "x     !        xoo x",
    "x           xx     x",
    "x            !     x",
    "x                  x"],[

    "x                  x",
    "x     !            x",
    "x   x     x  xxxooox",
    "x         x        x",
    "x  !xxx xxx        x",
    "x   x  o       x   x",
    "x   x              x",
    "x           xx x   x",
    "x   !              x",
    "x                  x"],[

    "xo               oox",
    "x      !    x      x",
    "x   x   x   x   o  x",
    "x       x !        x",
    "x                  x",
    "x      o       x   x",
    "x !                x",
    "x           xxxx   x",
    "x                  x",
    "x     xxx          x"]]



mapset[2] = [[
    "x            !     x",
    "x     !            x",
    "x   xx      x  o   x",
    "x    !      x      x",
    "x     x x    !     x",
    "x     x        x   x",
    "x   x     !    !   x",
    "x           x      x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x         xx!   o  x",
    "x     xxxxx        x",
    "x     x   x        x",
    "x !      !x    x   x",
    "x    o         x   x",
    "x           x      x",
    "x   !          !   x",
    "x                  x"],[

    "x                  x",
    "x     x    !       x",
    "x   ! x         o  x",
    "x           !      x",
    "x   o              x",
    "x      o      !x   x",
    "x         xxx  xx  x",
    "x          x       x",
    "x   !    ! x       x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x   x           o  x",
    "x      xxx         x",
    "x     o            x",
    "x              x   x",
    "x                  x",
    "x    ! ! !  x      x",
    "x   !              x",
    "x         !! !     x"],[

    "x                  x",
    "x          !       x",
    "x  x    !       o  x",
    "x  x          x    x",
    "x  x ! ! !    x    x",
    "x  x   o      xx   x",
    "x        xx        x",
    "x           xx     x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x        !   o     x",
    "x               o  x",
    "x   ! xx  x  x     x",
    "x                  x",
    "x      o    !      x",
    "x          !       x",
    "x     xxx      !   x",
    "x   !              x",
    "x                  x"],[

    "x      o           x",
    "x o       xxxo     x",
    "x   x!!x  o     o  x",
    "x                  x",
    "x     ! x !        x",
    "x      o x     x   x",
    "x   xx xx      x   x",
    "x           !      x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x        !     x! !x",
    "x   xxxx       xo  x",
    "x   !!         x   x",
    "x              x   x",
    "x      o  !    x   x",
    "x     !        xoo x",
    "x           xx     x",
    "x            !     x",
    "x                  x"],[

    "x                  x",
    "x     !     !      x",
    "x   x        x xooox",
    "x          !       x",
    "x  !xxxxxxx        x",
    "x   x  ox      x   x",
    "x   x   x !        x",
    "x           xx x   x",
    "x   !              x",
    "x                  x"],[

    "xo               oox",
    "x      !    x      x",
    "x   x   x   xxxxo  x",
    "x       x !        x",
    "x   !          x   x",
    "x      o    x  x   x",
    "x !!      !!x !  ! x",
    "x           xxxx   x",
    "x                  x",
    "x     xxx          x"]]



mapset[3] = [[
    "x            !     x",
    "x     !            x",
    "x   xx      !  o   x",
    "x    !     x!   x  x",
    "x     ! x  x !  x  x",
    "x   xxxx x x   x   x",
    "x   x     !    !   x",
    "x           x  xxx x",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x  x       xxx !   x",
    "x   xx    x !   o  x",
    "x     xx  xxxxxx   x",
    "x     x   x        x",
    "x !      !x    x   x",
    "x    o         x   x",
    "x      !    x      x",
    "x   !          !   x",
    "x                  x"],[

    "x                  x",
    "x     x    !       x",
    "x   ! x   xxxx  o  x",
    "x           !      x",
    "x   o              x",
    "x    xxx      !x   x",
    "x     x        xx  x",
    "x          xxxx !  x",
    "x   !    ! x       x",
    "x                  x"],[

    "x                  x",
    "x                  x",
    "x   x  !        o  x",
    "x      xxx   !     x",
    "x  o   x           x",
    "x      x       x   x",
    "x      xx xxx      x",
    "x    !   !  x      x",
    "x   !              x",
    "x         !! !     x"],[

    "x                  x",
    "x  xxxxxxx   xxxxxxx",
    "x  oo   !       o  x",
    "x                  x",
    "xxxxx   xxxxxxxxxxxx",
    "x                  x",
    "x       !   o  oo  x",
    "xoxxxx   xxxxxx   xx",
    "x   !              x",
    "x                  x"],[

    "x                  x",
    "x  !     !    !    x",
    "x        !     !   x",
    "x   ! xx o   xx    x",
    "x     x   o o x  ! x",
    "x     xo      x    x",
    "x     x oo  o x    x",
    "x     xxx   xxx!   x",
    "x   !              x",
    "x                  x"],[

    "x      o     !     x",
    "x o      !      o  x",
    "x    !!   o   !o   x",
    "x   !         oo   x",
    "x o   ! o ! o      x",
    "x  !   o        o  x",
    "x           o      x",
    "x   o  o oo ! o    x",
    "x   !           o  x",
    "x                  x"],[

    "x                  x",
    "x    x   x   x  !x x",
    "x o  x   x   x  ox x",
    "x   !x!  x!  x   x x",
    "x    x   x   x   x x",
    "x    x o x!  xo  x x",
    "x    x!  x   x   x x",
    "x    x   x   x   x x",
    "x                  x",
    "x                  x"],[

    "x            xxxx  x",
    "x xooox     !xoo   x",
    "x xxxxx      xoo   x",
    "x     !    ! xxxx  x",
    "x  !xxxxx   xxxx   x",
    "x   xooox    oox   x",
    "x   x   x !  oox   x",
    "x           xxxx   x",
    "x   !          !   x",
    "x                  x"],[

    "x                  x",
    "x      !           x",
    "x    !        !    x",
    "x         !        x",
    "x   !              x",
    "x      !           x",
    "x !           !  ! x",
    "x                  x",
    "x       !          x",
    "x                  x"]]


