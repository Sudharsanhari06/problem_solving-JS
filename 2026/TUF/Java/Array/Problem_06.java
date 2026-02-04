import java.util.*;
class problem_06 {
    
    static int[] removeZeroInBack(int[] arr){
        int[] temp=new int[arr.length];
        
        int j=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]!=0){
                temp[j]=arr[i];
                j++;
            }
        }
        return temp;
        
    }
    
    public static void main(String[] args) {
        int[] arr={1 ,0 ,2 ,3 ,0 ,-4 ,0 ,1};
        
        System.out.println("Try programiz.pro"+ Arrays.toString(removeZeroInBack(arr)));
        
        
    }
}