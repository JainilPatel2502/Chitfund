// subjects/os/p2.js
const express = require("express");
const router = express.Router();

// GET /os/p2
router.get("/", (req, res) => {
  const codeString = `
//Round Robin

#include <stdio.h>

void main() {
    int i, j, processes, q;
    int at[10], bt[10], wt[10], tat[10], remaining_bt[10], process_id[10];
    int current_time = 0, completed = 0, sum_wt = 0, sum_tat = 0;
    float avg_wt, avg_tat;

    // Input the number of processes
    printf("Total number of processes in the system: ");
    scanf("%d", &processes);

    // Input arrival time and burst time for each process
    for(i = 0; i < processes; i++) {
        printf("\nEnter the Arrival and Burst time of Process[%d]\n", i + 1);
        printf("Arrival time: ");
        scanf("%d", &at[i]);
        printf("Burst time: ");
        scanf("%d", &bt[i]);
        remaining_bt[i] = bt[i];  // Initialize remaining burst time
        process_id[i] = i + 1;    // Store original process number
    }

    // Sort processes based on arrival time using bubble sort
    for(i = 0; i < processes - 1; i++) {
        for(j = 0; j < processes - i - 1; j++) {
            if(at[j] > at[j + 1]) {
                // Swap arrival times
                int temp = at[j];
                at[j] = at[j + 1];
                at[j + 1] = temp;
                
                // Swap burst times
                temp = bt[j];
                bt[j] = bt[j + 1];
                bt[j + 1] = temp;
                
                // Swap remaining burst times
                temp = remaining_bt[j];
                remaining_bt[j] = remaining_bt[j + 1];
                remaining_bt[j + 1] = temp;
                
                // Swap process numbers
                temp = process_id[j];
                process_id[j] = process_id[j + 1];
                process_id[j + 1] = temp;
            }
        }
    }

    // Input the time quantum
    printf("Enter the Time Quantum: ");
    scanf("%d", &q);

    // Print the sorted process details
    printf("\n---AFTER SORTING---\n");
    printf("Process ID\tArrival Time\tBurst Time\n");
    for(i = 0; i < processes; i++) {
        printf("%d\t\t%d\t\t%d\n", process_id[i], at[i], bt[i]);
    }
    printf("-----------------\n");

    // Initialize current time to the first process arrival time
    current_time = at[0];
    printf("\nStarting execution at time %d\n", current_time);

    // Ready queue implementation
    int queue[100], front = 0, rear = 0;
    int is_in_queue[10] = {0};  // Track if a process is already in the queue

    // Add the first process to the queue
    queue[rear++] = 0;
    is_in_queue[0] = 1;
    printf("Added process %d to queue\n", process_id[0]);

    printf("\n----EXECUTION TRACE----\n");
    printf("Time\tProcess\tRemaining\tAction\n");

    while(completed != processes) {
        int current_process = -1;
        
        // If queue is not empty, get the next process
        if(front != rear) {
            current_process = queue[front++];
            is_in_queue[current_process] = 0;
            
            // If process has not yet arrived, advance time to its arrival
            if(current_time < at[current_process]) {
                printf("%d\t-\t-\t\tAdvancing time to %d\n", current_time, at[current_process]);
                current_time = at[current_process];
            }
            
            // Calculate execution time in this round
            int execution_time = (remaining_bt[current_process] <= q) ? 
                                  remaining_bt[current_process] : q;
            
            printf("%d\t%d\t%d\t\tExecuting for %d units\n", 
                   current_time, process_id[current_process], 
                   remaining_bt[current_process], execution_time);
            
            // Update current time
            current_time += execution_time;
            remaining_bt[current_process] -= execution_time;
            
            // Check for new arrivals during this time quantum
            for(i = 0; i < processes; i++) {
                if(i != current_process && at[i] <= current_time && remaining_bt[i] > 0 && !is_in_queue[i]) {
                    queue[rear++] = i;
                    is_in_queue[i] = 1;
                    printf("%d\tARRIVE\t-\t\tAdded process %d to queue\n", 
                           current_time, process_id[i]);
                }
            }
            
            // If current process still has remaining time, add it back to queue
            if(remaining_bt[current_process] > 0) {
                queue[rear++] = current_process;
                is_in_queue[current_process] = 1;
                printf("%d\t%d\t%d\t\tReturned to queue\n", 
                       current_time, process_id[current_process], 
                       remaining_bt[current_process]);
            } else {
                // Process has completed
                completed++;
                
                // Calculate turnaround time and waiting time
                tat[current_process] = current_time - at[current_process];
                wt[current_process] = tat[current_process] - bt[current_process];
                
                printf("%d\t%d\t0\t\tCompleted. TAT=%d, WT=%d\n", 
                       current_time, process_id[current_process], 
                       tat[current_process], wt[current_process]);
                
                // Accumulate for averages
                sum_tat += tat[current_process];
                sum_wt += wt[current_process];
            }
            
            // Print current queue status
            printf("%d\tQUEUE\t-\t\t", current_time);
            if(front == rear) {
                printf("Empty\n");
            } else {
                printf("[ ");
                for(i = front; i < rear; i++) {
                    printf("%d ", process_id[queue[i]]);
                }
                printf("]\n");
            }
        } else {
            // Queue is empty, find the next process to arrive
            int next_arrival_time = 9999;
            int next_process = -1;
            
            for(i = 0; i < processes; i++) {
                if(remaining_bt[i] > 0 && at[i] > current_time && at[i] < next_arrival_time) {
                    next_arrival_time = at[i];
                    next_process = i;
                }
            }
            
            if(next_process != -1) {
                printf("%d\tIDLE\t-\t\tAdvancing time to %d for next arrival\n", 
                       current_time, next_arrival_time);
                current_time = next_arrival_time;
                queue[rear++] = next_process;
                is_in_queue[next_process] = 1;
                printf("%d\tARRIVE\t-\t\tAdded process %d to queue\n", 
                       current_time, process_id[next_process]);
            }
        }
    }

    // Calculate average waiting time and turnaround time
    avg_wt = (float)sum_wt / processes;
    avg_tat = (float)sum_tat / processes;
    
    // Display output
    printf("\n----FINAL RESULTS----\n");
    printf("Process No \tBurst Time \tTAT \t\tWaiting Time\n");
    
    // Sort results by original process number
    int sorted_idx[10];
    for(i = 0; i < processes; i++) {
        sorted_idx[i] = i;
    }
    
    for(i = 0; i < processes - 1; i++) {
        for(j = 0; j < processes - i - 1; j++) {
            if(process_id[sorted_idx[j]] > process_id[sorted_idx[j+1]]) {
                int temp = sorted_idx[j];
                sorted_idx[j] = sorted_idx[j+1];
                sorted_idx[j+1] = temp;
            }
        }
    }
    
    for(i = 0; i < processes; i++) {
        int idx = sorted_idx[i];
        printf("Process No[%d] \t%d \t\t%d \t\t%d\n", 
               process_id[idx], bt[idx], tat[idx], wt[idx]);
    }
    
    printf("Average Turnaround Time: %.2f\n", avg_tat);
    printf("Average Waiting Time: %.2f\n", avg_wt);
}

  `;
  res.json({ code: codeString });
});

module.exports = router;
