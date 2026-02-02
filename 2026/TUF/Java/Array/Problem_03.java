
class Problem_03 {
    static boolean isSorted(int[] arr){
        
        for(int i=1;i<arr.length;i++){
            if(arr[i]<arr[i-1]){
                return false;
            }
        }
        return true;
        
    }
    public static void main(String[] args) {
        int arr[] = {1,3,8,4};
        System.out.println("Sorted Or Not:"+isSorted(arr));
    }
    
    
    
}
