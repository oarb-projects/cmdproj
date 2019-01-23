#include<stdio.h>

void main(){
    int x=1;
    printf("inicio\n");
    while(x<=5){
        printf("Valor: %d\n",x++);
        if(x==3)break;
    }
    printf("fin");
}