import gulp from 'gulp'
import { paths } from '../gulpfile'


export function javastetris() {
  return gulp.src(paths.javastetris, { since: gulp.lastRun(javastetris) })
    .pipe(gulp.dest('build/javastetris'))
}
