function intersection(nums1: number[], nums2: number[]): number[] {
    let set = new Set(nums1);
    let arr = nums2.filter(num =>set.has(num));
    let set2 = new Set(arr);
    return Array.from(set2);
};