from collections.abc import Callable


def first_true(lo: int, hi: int, predicate: Callable[[int], bool]) -> int:
    """
    Logisches Atom: Monotone Schwelle.

    Voraussetzung:
    predicate ist monoton auf [lo, hi].
    Das heißt: Wenn predicate(x) wahr ist, dann ist predicate(y)
    für alle y >= x ebenfalls wahr.
    """
    while lo < hi:
        mid = (lo + hi) // 2
        if predicate(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo
