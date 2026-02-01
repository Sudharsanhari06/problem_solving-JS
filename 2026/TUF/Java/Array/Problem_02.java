
// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Problem_02 {
    
    static int secondLargest(int[] arr){
        
        int max=arr[0];  //6
int min=0; //
        for(int i=1;i<arr.length;i++){
    if(max<arr[i]){
        min=max;
        max=arr[i];
    }else if(arr[i]>min && arr[i]!=max) {
        min=arr[i];
    }
    
}
return min;
    }
    
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        int[] arr={1,6,5};
        System.out.println("Second Largest:"+secondLargest(arr));
    }
}