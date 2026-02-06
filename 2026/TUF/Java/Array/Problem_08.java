// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Problem_08 {
    
    static int findconsecutive(int[] nums){
        
        int count=0;
        int max=0;
    for(int i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++;
        }else{
            count=0;
        }
        max = max<count?count:max;
    }
        return max;        
    }
    
    public static void main(String[] args) {
        int[] prices = {1, 1, 0, 0,0,0, 1, 1};

        System.out.println("consecute Numbber: "+findconsecutive(prices));
    }
}