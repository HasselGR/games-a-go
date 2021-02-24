import gulp from 'gulp'
import { paths } from '../gulpfile'


export function cssminesweeper() {
  return gulp.src(paths.cssminesweeper, { since: gulp.lastRun(cssminesweeper) })
    .pipe(gulp.dest('build/cssminesweeper'))
}
