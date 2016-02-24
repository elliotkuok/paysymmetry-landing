desc "Uploads files to the machine at sinclairtarget.com via rsync"
task :deploy do
  sh 'rsync -vz * static@sinclairtarget.com:/srv/www/paysymmetry.com --exclude "Rakefile"'
end
