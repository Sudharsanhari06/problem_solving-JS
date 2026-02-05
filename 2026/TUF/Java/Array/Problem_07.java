
class Problem_07 {
    static int FindMissingNumber(int[] arr){
        int n=arr.length; //3
        int total=n*(n+1)/2; //6
        int sum=0;
        for(int i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        int miss=total-sum;
        return miss;
    }
    public static void main(String[] args) {
        int arr[] = {1,2,4};
        
        System.out.println("Missing Number"+FindMissingNumber(arr));
        System.out.println(3/2);
    }
}