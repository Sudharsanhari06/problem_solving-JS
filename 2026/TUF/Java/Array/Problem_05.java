
import java.util.*;
class Problem_05 {

    static int[] firstLeftArray(int[] arr){
        int first=arr[0];

        for(int i=0;i<arr.length-1;i++){
            arr[i]=arr[i+1];
        }
        arr[arr.length-1]=first;    
        return arr; 

    }    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};

        System.out.println("Left Rotate Array:"+ Arrays.toString(firstLeftArray(arr)));
    }
}