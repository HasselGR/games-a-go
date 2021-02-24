import gulp from 'gulp'
import { paths } from '../gulpfile'


export function imagesminesweeper() {
  return gulp.src(paths.imagesminesweeper, { since: gulp.lastRun(imagesminesweeper) })
    .pipe(gulp.dest('build/imagesminesweeper'))
}
