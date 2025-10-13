    static void linerSearch(int[] arr,int target){
        int index=-1;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==target){
                index=i;
                break;
            }
        }
        if(index==-1) System.out.println("elemnt not found");
        else System.out.println("elemnr found in "+index);
    }