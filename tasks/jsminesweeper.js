import gulp from 'gulp'
import { paths } from '../gulpfile'


export function jsminesweeper() {
  return gulp.src(paths.jsminesweeper, { since: gulp.lastRun(jsminesweeper) })
    .pipe(gulp.dest('build/jsminesweeper'))
}
