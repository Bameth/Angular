import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input({ required: true }) pages: number[] = [];
  @Input() currentPage: number = 0;
  @Input() first: boolean = false;
  @Input() last: boolean = false;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  onPaginate(page: number): void {
    this.onPageChange.emit(page);
  }

  previousPage(): void {
    if (!this.first && this.currentPage > 0) {
      this.onPageChange.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (!this.last) {
      this.onPageChange.emit(this.currentPage + 1);
    }
  }
}
