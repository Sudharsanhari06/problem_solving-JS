


class Problem_09 {
    static int appearsOnce(int[] arr){
        for(int i=0;i<arr.length;i++){
            int num=arr[i];
            int count=0;
            for(int j=0;j<arr.length;j++){
                if(num==arr[j]){
                    count++;
                }     
            }
            if(count==1){
                return num;
            }
        }
        return -1;
        
    }
    
    public static void main(String[] args) {
        int arr[] ={4,1,2,1,2};

        System.out.println("Find the number that appears once: "+appearsOnce(arr));
    }
}