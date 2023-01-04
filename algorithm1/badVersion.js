const bad = 2;

function findFirstBadVersion(n) {
    let left = 1,
        right = n;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (isBadVersion(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}

/* ==================== UTILS ===================== */
function isBadVersion(current) {
    return bad <= current;
}
console.log(findFirstBadVersion(5));
