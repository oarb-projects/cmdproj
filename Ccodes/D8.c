#include <stdio.h>
 
main()
{
    int i;
    char s[]="Hello";
    for (i=0;s[i];++i){
        printf("%d",i);
    }
    i=0;
    printf("\n");
    while(s[i++]){
        printf("%d",i);
    }
}